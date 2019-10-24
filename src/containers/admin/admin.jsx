import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {removeUserToken} from '../../redux/action-creators/user'
import { reqUsers } from '../../api'

class Admin extends Component {

  logout = () => {
      this.props.removeUserToken()
  }
  
  getUsers = async () => {
    reqUsers()
    const result = await reqUsers()
  }

  render() {
    if(!this.props.hasLogin){
      return <Redirect to = '/login'/>
    }

    return (
      <div>
        <p>Admin, {this.props.user.username}</p>
        <button onClick = {this.logout}>退出</button>
        &nbsp;
        <button onClick = {this.getUsers}>获取用户列表</button>
      </div>
    )
  }
}
export default connect(
  state => ({user: state.user.user, hasLogin: state.user.hasLogin}),
  {removeUserToken}
)(Admin)