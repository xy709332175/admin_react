import React from 'react'
import {connect} from 'react-redux'
import Counter from '../components/counter'
import {increment,decrement,incrementAsync} from '../redux/action-creators/count'

/* 
    组件容器:
        通过connect高阶函数产生
        组件容器负责与UI组件和redux沟通
*/

// mapStateToprops 指定向ui组件传递哪些一般属性的回调函数 

// const mapStateToprops = function (state) {  state = store.getState()
//   return { // 对象中有哪些属性, 都会传入UI组件
//     count: state
//   }
// }

// 对象中的属性,都会传入ui组件
// const mapStateToprops = state => ({count : state})
        
// // mapDispatchToprops 指定向ui组件传递哪些函数属性的回调函数
// const mapDispatchToprops = (dispatch) => ({
//     // 对象中所有方法都会以函数属性传递ui组件
//     increment : number => dispatch(increment(number)),
//     decrement : number => dispatch(decrement(number))
// })

// // 第一种方式
// export default connect(
//     mapStateToprops, //传入一般属性 count
//     mapDispatchToprops //传入函数属性 相当于 increment/decrement(){}
// )(Counter)




// 第二种方式
export default connect(
    state => ({count : state.count}), //传入一般属性 count
    {increment,decrement,incrementAsync} //传入函数属性 相当于 increment/decrement(){}
)(Counter)