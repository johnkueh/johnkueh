import React from 'react';
import PropTypes from 'prop-types';

const Stroke = ({ color }) => (
  <svg width="236" height="16" xmlns="http://www.w3.org/2000/svg">
    <path
      fill={color}
      d="M2.8 8.3l16.8-.6L35 7.1l15-.7c2.2-.1 4.5-.3 6.8-.3l10-.2h5.5l10.3.2 15.4.6L129.5 8l15.5.8 15.4.7c9.7.4 19.4.7 29 1.3l8 .5 8.9.7 7.7.7 3.2.3 3.7.5 5.2.6 6.6 1.2.6.1a2.3 2.3 0 0 0 2.3-1.6c.2-.6.1-1.3-.2-1.9-.2-.4-.8-1-1.3-1.1l-4.2-.8-4.2-.7A403.3 403.3 0 0 0 212 7.7a2.4 2.4 0 0 0 1-2.4c-.2-.6-.6-1.2-1-1.5l-1.1-.5a33 33 0 0 0-2.6-.4l-2-.3-3.8-.2L195 2l-15.5-.5-15.4-.3L156 1h-24.4L115.8.8C106.1.7 96.2.6 86.4.7H71.8c-5.2 0-10.4 0-15.6.2L45.9 1l-5.9.1-9.4.4-6.2.3c-7.4.5-14.7 1-22 1.7-.5.1-.8.3-1.1.6-.5.4-.8 1-.8 1.6 0 1.3 1 2.5 2.3 2.5"
      fillRule="evenodd"
    />
  </svg>
);

export default Stroke;

Stroke.propTypes = {
  color: PropTypes.string.isRequired
};