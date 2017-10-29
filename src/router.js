import React, { Component } from 'react';
import {auth} from './Firebase/constants';
import { Switch, Route, Router, HashRouter } from 'react-router';

import createHashHistory from 'history/createHashHistory';

//import SigninPage from './containers/SigninPage'

import { Home } from './Views/Home';

//import App from './App';

const history = createHashHistory();

class Routes extends Component {
  componentWillMount() {
        //this.checkAuthentication(this.props);
    }
  componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
          //  this.checkAuthentication(nextProps);
        }
    }
  checkAuthentication(params) {
      //  const { history } = params;
        if(!auth.currentUser){
          history.replace({pathname:'/'});
        }
      }
  render() {
    return (
      <Router history={history}>
        <Switch>
            <Route path="/app" component={Home}/>
            <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
