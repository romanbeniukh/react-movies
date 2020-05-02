import React from 'react';
import T from 'prop-types';

const GoBack = ({ handler, title }) => (
  <button className="go-back" type="button" onClick={() => handler()}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
    <span className="go-back__title">{title}</span>
  </button>
);

GoBack.propTypes = {
  handler: T.func.isRequired,
  title: T.string.isRequired,
};

export default GoBack;
