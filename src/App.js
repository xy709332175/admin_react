
import React, {Component} from 'react'
import {Router,Route, Switch} from 'react-router-dom'
import Login from "./containers/login/login"
import Admin from "./containers/admin/admin"

export default class App extends Component {

  render () {
    return (
      <Router history>
        <Switch> 
          <Route path="/login" component={Login}/>
          <Route path="/" component={Admin}/>
        </Switch>
      </Router>
    )
  }
}