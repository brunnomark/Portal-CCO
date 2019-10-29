import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../../Component/Organisms/Navbar/Navbar';
import Layout from '../../Component/Templates/Layout/Layout';
import './PrivatePages.scss';

const PrivatePages = ({
  component: Component, logged, menu, loadLogout, isMenuOpen, menuHandler, ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => (logged ? (
        <div className="private-pages">
          <Navbar open={isMenuOpen} menuHandler={menuHandler} logout={loadLogout}/>
          <div className="private-pages-content">
            <Layout open={isMenuOpen}>
              <Component open={isMenuOpen} {...props} />
            </Layout>
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