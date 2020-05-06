import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

import './app.css';

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210}/>
      <Switch>
        <HashRouter
          path="/"
          component={HomePage}
          exact />

        <HashRouter
          path="/cart"
          component={CartPage}
          />
      </Switch>
    </main>
  );
};

export default App;
