import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

import LoginPage from '../components/LoginPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import NotFoundPage from '../components/NotFoundPage'

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute exact path='/' component={LoginPage} />
      <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
      <PrivateRoute path='/create' component={AddExpensePage} />
      <PrivateRoute path='/edit/:id' component={EditExpensePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)

export default AppRouter
