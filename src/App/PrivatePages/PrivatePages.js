import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../../Component/Organisms/Navbar/Navbar';
import './PrivatePages.scss';

function PrivatePages({
  component: Component, logged, menu, loadLogout, isMenuOpen, menuHandler, ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => (logged ? (
        <div className="private-pages">
          <Navbar menuHandler={menuHandler} logout={loadLogout}/>
          <div className="private-pages-content">
            <Component open={isMenuOpen} {...props} />
          </div>
        </div>
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      ))}
    />
  );
}

export default PrivatePages;