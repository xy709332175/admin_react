
// 用于创建多个 action 对象的工厂函数

import {INCREMENT,DECREMENT} from './action-types'


export const increment = (number) => ({type:INCREMENT,data:number})
export const decrement = (number) => ({type:DECREMENT,data:number})