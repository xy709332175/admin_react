
import React, {Component} from 'react'
export default class App extends Component {
  state = {
    count : 0
  }
  numberRef = React.createRef()

  increment = () =>{
    const number = this.numberRef.current.value * 1
    const count = this.state.count + number
    this.setState({
      count,
    })
  }
  decrement = () => {
    const number = this.numberRef.current.value * 1
    const count = this.state.count - number
    this.setState({
      count,
    })
  }
  incrementIfOdd = () => {
    const number = this.numberRef.current.value * 1
    const count = this.state.count
    if(count %2 ===1){
      this.setState({
        count : count + number
      })
    }

  }
  incrementAsync = () => {
    const number = this.numberRef.current.value * 1
    setTimeout(() => {
      const count = this.state.count - number
      this.setState({
        count,
      })
    }, 1000);
  }
  
  render () {
    const count = this.state.count
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