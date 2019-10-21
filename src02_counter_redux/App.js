
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {increment,decrement} from './redux/action-creactors'
export default class App extends Component {
  static propTypes = {
    store : PropTypes.object.isRequired
  }
  numberRef = React.createRef()

  increment = () =>{
    const number = this.numberRef.current.value * 1
    // 通知store做增加更新
    this.props.store.dispatch(increment(number))
  }

  decrement = () => {
    const number = this.numberRef.current.value * 1
    // 通知store做增加更新
    this.props.store.dispatch(decrement(number))
  }

  incrementIfOdd = () => {
    const number = this.numberRef.current.value * 1
    const count = this.props.store.getState()
    if(count %2 ===1){
      this.props.store.dispatch(increment(number))
    }

  }
  incrementAsync = () => {
    const number = this.numberRef.current.value * 1
    setTimeout(() => {
      this.props.store.dispatch(increment(number))
    }, 1000);
  }
  
  render () {
    const count = this.props.store.getState()
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref = {this.numberRef}>
            <option value = "1">1</option>
            <option value = "2">2</option>
            <option value = '3'>3</option>
          </select>
          <button onClick = {this.increment}>+</button>
          <button onClick = {this.decrement}>-</button>
          <button onClick = {this.incrementIfOdd}>increment if odd</button>
          <button onClick = {this.incrementAsync}>incrementAsync async</button>
        </div>
      </div>
    )
  }
}