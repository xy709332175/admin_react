
import React, {Component} from 'react'
import {Button, message} from 'antd'
import {HashRouter, BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from "./pages/login/login"
import Admin from "./pages/admin/admin"

export default class App extends Component {

  handleClick = () => {
    message.success('响应点击')
    message.success('响应点击')
  }

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