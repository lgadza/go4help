import React from 'react';
import PropTypes from 'prop-types';

// Button component
const OutlineButton = ({ text, onClick, type, disabled }) => {
  return (
    <button
      type={type}
      className="btn main-orange-color "
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

// PropType validation
OutlineButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool
};

// Default props
OutlineButton.defaultProps = {
  type: 'button',
  disabled: false,
  onClick: () => {} // No operation function as a placeholder
};

export default OutlineButton;
