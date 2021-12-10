import React from 'react';
import { Router } from '@reach/router';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import reportWebVitals from './reportWebVitals';
import Account from "./pages/Account";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Payment from "./pages/Payment";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Login path={'/login'}/>
          <PrivateRoute path='/' default component={Account}/>
          <PrivateRoute path='/payment' component={Payment}/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
