import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Table.css';

class Table extends Component {
  render() {
    const { winner, player, dealer, score } = this.props;
    return (
      <div className="container">
        <div className="Table">
          {dealer.length > 0 &&
            <div className={`Dealer col-xs-12 col-sm-12 col-md-9 ${winner}`}>
              <div className='cardFan'>
                {dealer}
              </div>
              <h4 className="text-center">Dealer: <span>{score.dealer} points</span></h4>
            </div>
          }
          <div className="clearfix"></div>
          {player.length > 0 &&
            <div className={`Player col-xs-12 col-sm-12 col-md-9 ${winner}`}>
              <div className='cardFan'>
                {player}
              </div>
              <h4 >Player: <span>{score.player} points</span></h4>
            </div>
          }
          <div className="clearfix"></div>
        </div>
      </div>
    )
  }
}

Table.propTypes = {
  winner: PropTypes.string,
  dealer: PropTypes.array,
  player: PropTypes.array,
  score: PropTypes.shape({
    player: PropTypes.number,
    dealer: PropTypes.number
  })
};

export default Table;