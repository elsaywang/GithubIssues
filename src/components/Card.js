import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { suitMap } from '../utils/suit';
import './Card.css';


class Card extends Component {
  state = {
    isDown: this.props.hidden,
  }
  toggle = (e) => {
    this.setState({ isDown: !this.state.isDown })
  }
  render() {
    const { hidden, code, suit, strength } = this.props;

    const firstCodeChar = code.slice(0, 1);

    const combo = code && `${firstCodeChar === '0' ? '10' : firstCodeChar}${suitMap[suit]}`;

    const style = ['HEARTS', 'DIAMONDS'].includes(suit) ? 'card-red' : 'card';

    const { isDown } = this.state;
    if (hidden) {
      return (
        <div className="card-hidden" id="hidden">
          {'?'}
        </div>
      )
    } else {
      return (
        <div className={style} onClick={() => this.toggle()} >
          {isDown ? 'Face Down' : combo}
        </div>
      )
    }
  }
}
Card.propTypes = {
  code: PropTypes.string,
  suit: PropTypes.string,
  hidden: PropTypes.bool,
};
export default Card;