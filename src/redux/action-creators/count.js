
// 用于创建多个 action 对象的工厂函数

import {INCREMENT,DECREMENT} from '../action-types'

// 同步增加 减少
export const increment = (number) => ({type:INCREMENT,data:number})
export const decrement = (number) => ({type:DECREMENT,data:number})

// 异步增加

/* 
    同步action是对象  {type, data}
    异步是函数 dispatch => {}
*/

export const incrementAsync = (number,delayTime) => {
    // 返回一个回调(参数为dispatch)
    return dispatch => {
        // 异步   模拟异步请求
        setTimeout(() => {
            // 有结果 分发一个同步新增的action对象
            dispatch(increment(number))
        }, delayTime);
    }
}
