import React from 'react';
import { Route,IndexRoute} from 'react-router';
import App from './components/App';
import AnonymousContainer from './container/AnonymousContainer/AnonymousContainer';
import SignUpPage from './components/SignUp/SignUp';

export default(
  <Route path="/" component={App}>
    <Route path="/auth" component={AnonymousContainer} >
      <Route path="signup" component={SignUpPage} />
    </Route>
  </Route>
);
