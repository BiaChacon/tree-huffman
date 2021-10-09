import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Zip from './pages/Zip';
import Unzip from './pages/Unzip';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Zip} path="/zip" exact />
      <Route component={Unzip} path="/unzip" exact />
    </BrowserRouter>

  );
}

export default Routes;
