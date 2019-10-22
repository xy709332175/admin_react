
import React, {Component} from 'react'
import {HashRouter,Route, Switch} from 'react-router-dom'
import Login from "./containers/login/login"
import Admin from "./containers/admin/admin"

export default class App extends Component {

  render () {
    return (
      <HashRouter>
        <Switch> 
          <Route path="/login" component={Login}/>
          <Route path="/" component={Admin}/>
        </Switch>
      </HashRouter>
    )
  }
}