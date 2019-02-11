import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { disabled, label, classes, action } = this.props;
    return (
      <button className={classes} onClick={action} disabled={disabled}>{label}</button>
    )
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  action: PropTypes.func,
  label: PropTypes.string,
  classes: PropTypes.string
};


export default Button;