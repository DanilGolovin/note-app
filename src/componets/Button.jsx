import React from 'react';
import PropTypes from 'prop-types';

const ButtonProps = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

const Button = (props) => {
  const { onClick, className, type, disabled, children } = props;

  return (
    <button className={className ? className : 'btn'} onClick={disabled ? '' : onClick} type={type}>
      {children}
    </button>
  );
};

Button.propTypes = ButtonProps;

export default Button;
