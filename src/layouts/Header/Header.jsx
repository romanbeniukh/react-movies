import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Search from '../../components/Search/Search';

const Header = () => {
  const history = useHistory();

  return (
    <header className="search-bar">
      <div className="search-bar__link-wrap">
        <NavLink exact to="/" className="search-bar__link" activeClassName="search-bar__link--active">
          Home
        </NavLink>
        <NavLink to="/popular" className="search-bar__link" activeClassName="search-bar__link--active">
          Popular
        </NavLink>
        <NavLink to="/top-rated" className="search-bar__link" activeClassName="search-bar__link--active">
          Top rated
        </NavLink>
      </div>
      <Search history={history} />
    </header>
  );
};

export default Header;
