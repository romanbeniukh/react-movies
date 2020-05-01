import React from 'react';
import ReactLoader from 'react-loader-spinner';

const Loader = () => (
  <div className="loader">
    <ReactLoader type="Oval" color="#ccc" height={80} width={80} />
  </div>
);

export default Loader;
