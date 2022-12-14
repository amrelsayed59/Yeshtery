import React, { lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import PublicRoute from './components/PublicRoute';
import Details from './modules/main/Components/Details';
// lazy Main Module
const Main = lazy(async () => await import('./modules/main'));

const Routes: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute component={Main} path="/" exact />
      <PublicRoute component={Details} path="/:id" />
      {/* Error404 Routes */}
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
