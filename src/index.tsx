import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const stores = {};

ReactDOM.render(
  <Provider { ...stores }>
    <Router>
      <>
        <Route exact path="/" component={Home} />
      </>
    </Router>
  </Provider>,
  document.getElementById('app')
);
