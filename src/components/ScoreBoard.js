import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ScoreBoard.css';

class ScoreBoard extends Component {
  render() {
    const { winner, dealer, player } = this.props;
    return (
      <div className="ScoreBoard col-xs-12" data-winner={winner}>
        <div className="container">
          <div className="col-xs-6">
            <h4 className="text-center title">Scoreboard</h4>
            {winner && <p>{winner.replace(/^\w/, c => c.toUpperCase())} Won!</p>}
          </div>
          <div className="Dealer col-xs-3 text-center">
            <h5>Dealer </h5>
            <h3>{dealer}</h3>
          </div>
          <div className="Player col-xs-3 text-center">
            <h5>Player</h5>
            <h3>{player}</h3>
          </div>
        </div>
      </div>
    )
  }
}

ScoreBoard.propTypes = {
  winner: PropTypes.string,
  dealer: PropTypes.number,
  player: PropTypes.number
};

export default ScoreBoard
