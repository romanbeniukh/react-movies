import React from 'react';
import scrollToTop from '../../helpers/scrollToTop';

const Footer = () => (
  <footer className="page-footer">
    <div className="copyright">
      <span className="copyright__text">© REACT MOVIES 2020</span>
    </div>
    <button type="button" onClick={() => scrollToTop()} className="page-footer__to-top">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    </button>
  </footer>
);

export default Footer;
