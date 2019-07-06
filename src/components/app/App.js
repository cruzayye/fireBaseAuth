import React from 'react';
import {
  // HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { routes } from '../routes/routes';

const { LOGIN, SIGNUP } = routes;

export default function App() {
  return (
     <>
      <Router>
        <Switch>
            <Route path={SIGNUP.path} component={SIGNUP.component} />
            <Route path={LOGIN.path} component={LOGIN.component} />
        </Switch>
     </Router>
     </>
  );
}
