import React from 'react';
import {
  // HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { routes } from '../routes/routes';

const { LOGIN, SIGNUP, SUCCESS } = routes;

export default function App() {
  return (
     <>
      <Router>
        <Switch>
          <Route path={SIGNUP.path} component={SIGNUP.component} />
          <Route path={SUCCESS.path} component={SUCCESS.component} />
          <Route path={LOGIN.path} component={LOGIN.component} />
        </Switch>
      </Router>
     </>
  );
}
