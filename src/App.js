import React, { Component } from 'react'
import Button from './components/Button'
import Card from './components/Card';
import CardFan from './components/CardFan';
// import Table from './components/Table'
import ScoreBoard from './components/ScoreBoard'
import { giveCard, givePoints } from './actions/Card';
import { watchScore, toggleHidden } from './actions/Executions';
import { resetGame, newGame, createDeckCard } from './actions/Game';
import { randomize } from './utils/deckUtil';
import './App.css';
import { connect } from "react-redux";


class Game extends Component {

  getUniqueCard = async (user, hidden = false, score = this.props.score) => {
    const { deck } = this.props;
    if (deck.length) {
      const card = deck[randomize(deck)];
      this.props.giveCard(user, card, hidden);
      this.props.givePoints(user, card.strength, hidden);
    }
  }
  selectHit = () => {
    this.getUniqueCard('player')
  }

  loopDealer = () => {
    if (this.props.score.dealer < 20) {
      this.getUniqueCard('dealer', false)
    } else {
      this.props.watchScore(this.props.score, true);
    }
  }
  selectDeal = () => {
    this.props.toggleHidden(this.props.table, this.props.deck);

    if (this.props.score.dealer < 20) {
      this.loopDealer();
    } else {
      this.props.watchScore(this.props.score, true);
    }
  }
  componentDidMount() {
    this.props.createDeckCard();
  }
  componentWillUpdate(nextProps) {
    if (nextProps.score.dealer !== this.props.score.dealer || nextProps.score.player !== this.props.score.player) {
      this.props.watchScore(nextProps.score);
    }
  }

  dealCards = () => {
    this.props.resetGame();
    this.props.createDeckCard();
    const { deck } = this.props;

    for (let i = 0; i < 5; i++) {
      if (i === 0 || i === 3) { this.getUniqueCard('player') }
      if (i === 1) { this.getUniqueCard('dealer', true) }
      if (i === 4) {
        this.getUniqueCard('dealer', false)
        this.props.newGame();
      }
    }
  }
  render() {
    const { player, dealer } = this.props.table;

    const cardsTable = {
      player: player.map((card, index) =>
        <div data-card='card-player'>
          <Card key={index} {...card} />
        </div>
      ),
      dealer: dealer.map((card, index) =>
        <div data-card='card-dealer'>
          <Card key={index} {...card} />
        </div>
      )
    }
    return (
      <div className="Game">
        <h5 className="main-title text-center">BlackJack</h5>
        <CardFan cards={dealer} user={'dealer'} score={this.props.score.dealer} />
        <CardFan cards={player} user={'player'} score={this.props.score.player} classes='playerFan'/>
        
        <div className="board">
          <ScoreBoard {...this.props.score} winner={this.props.settings.winner} />
        </div>
        <div className="actions">
          <Button classes={'new'} action={this.dealCards.bind(this)} label={'New'} disabled={this.props.settings.inGame} />

          <Button classes={'hit'} action={this.selectHit.bind(this)} label={'Hit'} disabled={this.props.settings.isHitDisabled} />

          <Button classes={'deal'} action={this.selectDeal.bind(this)} label={'Deal'} disabled={this.props.settings.isStayDisabled} />

        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ settings, deck, score, table }) => (
  {
    settings,
    deck,
    score,
    table,
  }
)

const mapDispatchToProps = {
  giveCard,
  givePoints,
  watchScore,
  toggleHidden,
  resetGame,
  newGame,
  createDeckCard,
};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
