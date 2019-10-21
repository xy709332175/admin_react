import React, {Component} from 'react'
import {Form, Icon, Input, Button} from 'antd'

import logo from './images/logo.png'
import './login.less'

const {Item} = Form

class Login extends Component {

  handleSubmit = (event) =>{
    event.preventDefault()

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      } else {

      }
    });

    // const form = this.props.form
    // const username = form.getFieldValue('username') 
    // const password = form.getFieldValue('password') 
    // const values = form.getFieldsValue()
  }

  validatePwd =(rule,value,callback)=>{
    if(value===''){
      callback('密码必须输入')
    } else if(value.length < 4){
      callback('密码必须大于4位')
    } else if(value.length >12){
      callback('密码必须小于12位')
    } else if(/^[a-zA-Z0-9]+$/.test(value)){
      callback('用户名是英文数字或下划线组成!')
    } else {
      callback()
    }
  }

  render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <div className="login">
          <header className="login-header">
            <img src={logo} alt="logo"/>
            <h1>后台管理系统</h1>
          </header>
          <div className="login-content">
            <h1>用户登陆</h1>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Item>
                {
                  getFieldDecorator('username', {
                  initialValue : '',
                  rules: [
                    { required: true, whitespace: true, message: '用户名必须填写!' },
                    { min: 4, message: '用户名不小于4位!' },
                    { max: 12, message: '用户名不大于12位!' },
                    { pattern: /^[a-zA-Z0-9]+$/, message: '用户名是英文数字或下划线组成!' },
                  ],
                })(
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                  />)  
                  }
              </Item>
              
              <Form.Item>
                {
                  getFieldDecorator('password', {
                  rules: [
                    { required: true, message: '密码必须填写!' },
                    { validator: this.validatePwd },
                  ],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                />)  
                }
              </Form.Item>
              <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">登陆</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )
    }
  }

  const LoginWrap = Form.create()(Login);

  export default LoginWrap
