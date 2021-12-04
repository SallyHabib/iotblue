import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomePresenter from '../pages/Users/HomePresenter';
import UserDetails from '../pages/Users/UserDetails';

export const hello = (
  <>
    <Router>
      <Route exact path="/" component={HomePresenter} />
      <Route path="/user-details/:id" component={UserDetails} />
    </Router>
  </>
)
