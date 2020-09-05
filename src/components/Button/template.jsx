import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', className }) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'secondary': {
        return '';
      }
      case 'white': {
        return 'bg-white-100 text-primary-300 border border-white-100 hover:border-primary-300 hover:bg-primary-300 hover:text-white-100';
      }
      case 'ghost': {
        return '';
      }
      default:
      case 'primary': {
        return 'bg-primary-300 border border-primary-300 text-white-300 hover:bg-transparent hover:text-primary-300 cm-shadow-300';
      }
    }
  };

  return (
    <button
      className={`focus:outline-none rounded px-6 py-2 cm-btn transition-all duration-500 ${getVariantStyle()} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['secondary', 'primary', 'white', 'ghost']),
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
};

export default Button;
