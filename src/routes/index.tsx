import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';

import { history } from '../store';

import Root from './renderers/root';
import NotFound from './renderers/not-found';

function Routing() {
  return (
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/" component={Root} />
          <Route path="*" component={NotFound} />
        </Switch>
      </>
    </ConnectedRouter>
  );
}

export default Routing;
