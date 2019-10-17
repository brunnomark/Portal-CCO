import React, { Component } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
// import Navbar from '../Component/Organisms/Navbar/Navbar';

/* Context routes */
import PrivatePages from './PrivatePages';
import PublicPages from './PublicPages';

/* Public routes */
import Login from './PublicPages/Login';

/* Private routes */
import Home from './PrivatePages/Home';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privateItems: [
        {
          component: Home,
          id: 'home',
          name: 'Home',
          path: '/home',
          isMenu: true          
        },
      ],
      isMenuOpen: false
    };
  }

  menuOpenHandler = () => {
    const newValue = !this.state.isMenuOpen;
    this.setState({ isMenuOpen: newValue });
  }

  privateItemMenu = () => {
    const { privateItems } = this.state;
    return privateItems.filter(item => item.isMenu);
  };

  render() {
    const { privateItems } = this.state;
    const menu = this.privateItemMenu();

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {/*<Navbar />*/}
            {/* Public routes */}
            <PublicPages path="/login" component={Login} />
            {/* Private routes */}
            <PrivatePages path="/" isMenuOpen={this.state.isMenuOpen} menuHandler={this.menuOpenHandler} exact component={Home} menu={menu} />
            {privateItems.map(item => (
              <PrivatePages
                key={`private-pages-${item.id}`}
                isMenuOpen={this.state.isMenuOpen}
                menuHandler={this.menuOpenHandler}
                path={item.path}
                exact
                component={item.component}
                menu={menu}
              />
            ))}
            <PrivatePages path="*" exact component={Home} menu={menu} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;