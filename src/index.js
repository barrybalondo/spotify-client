import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import PeoplesIndex from './containers/people/index';
import PeopleShow from './containers/people/show';
import PeopleNew from './containers/people/new';
import PeopleUpdate from './containers/people/update';

const createStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>  
        <Route path="/people" component={PeoplesIndex}/>
        <Route path="/people/new" component={PeopleNew}/>
        <Route path="/people/:id" component={PeopleShow}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
