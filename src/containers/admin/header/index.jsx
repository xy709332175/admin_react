import React, { Component } from "react";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom' //高阶组件,包装非路由
import {Modal, Button, Icon} from 'antd'
import dayjs from 'dayjs'
import format from 'date-fns/format'
import screenfull from 'screenfull'

import {removeUserToken} from '../../../redux/action-creators/user'
import LinkButton from '../../../components/link-button'
import {reqWeather} from '../../../api'

import './index.less'
// import { format } from "path";


@connect(state => ({
  username: state.user.user.username,
  headerTitle: state.headerTitle
  }),
  {removeUserToken}
)
@withRouter
class Header extends Component {

  state = {
    // currentTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
    currentTime: format(Date.now(), 'yyyy-MM-dd HH:mm:ss'),
    dayPictureUrl: '',
    weather: '',
    isFullScreen: false
  }

  logout = () => {
    Modal.confirm({
      title: '确认退出?',
      onOk: () => {
        this.props.removeUserToken()
      },
      onCancel() {
        console.log('Cancel');
      },
    })
  }

  showWeather = async() => {
    const {dayPictureUrl, weather} = await reqWeather('北京')

    this.setState({
      dayPictureUrl,
      weather
    })
  }

  handleFullScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle()
    }
  }

  componentDidMount(){
    this.intervalId = setInterval(() => {
      this.setState({
        currentTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
      })
    }, 1000);

    this.showWeather()

    screenfull.onchange (() => {
        this.setState ({
          isFullScreen : !this.state.isFullScreen
        })
    }
  )
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  render() {

    // 得到当前请求的路由路径
    const {currentTime, dayPictureUrl, weather, isFullScreen} = this.state
    const {username, headerTitle} = this.props

    return (
      <div className="header">
        <div className="header-top">
          <Button size = 'small' onClick = {this.handleFullScreen}>
            <Icon type = {isFullScreen ? 'fullscreen-exit' : 'fullscreen'}></Icon>
          </Button>
          <span>欢迎, {username}</span>
          <LinkButton onClick={this.logout}>退出</LinkButton>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">{headerTitle}</div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img
              src={dayPictureUrl}
              alt="weather"
            />
            <span>{weather}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header