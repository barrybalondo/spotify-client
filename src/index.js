import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

import '../style/index.css';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import PeoplesIndex from './containers/people/index';

const createStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>  
        <Route path="/people" component={PeoplesIndex}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
