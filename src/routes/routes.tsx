import React from 'react'
import { Route,   BrowserRouter as Router } from 'react-router-dom'
import Home from '../pages/Users'

export const hello = (
  <>
    <Router>
      <Route  path="/"  component={Home} />
    </Router>
  </>
)
