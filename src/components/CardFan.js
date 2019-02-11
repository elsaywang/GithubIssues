import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import classNames from 'classnames';
import './CardFan.css';

// const CardFan = ({ cards }) =>
//   (console.log(cards),
//     <div className="cardfan">
//       {
//         cards.map(card => <div key={card.code} data-card='card'><Card  {...card} /></div>)
//       }
//     </div>
//   )

const props = {
  "suit": "HEARTS",
  "code": "KH"
}
const CardFan = (cardsProps) => {

  const { cards, user, score ,classes} = cardsProps;
  console.log(`here`, cards,classes)
  return (
    <div className={classNames(`cardfan`,classes)}>
      {
        cards.map((card,i) => <div key={i} data-card={`card`}><Card  {...card} /></div>)
      }
      <h5 className="header">{user}: <span>{score} points</span></h5>
    </div>
  )
}

CardFan.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      deckID: PropTypes.string,
      strength: PropTypes.number,
      suit: PropTypes.string,
    }),
  ),
  user: PropTypes.string,
  score: PropTypes.number,
  classes:PropTypes.string,
};

export default CardFan;