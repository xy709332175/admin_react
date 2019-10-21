import {
    DECREMENT,
    INCREMENT
}  from '../action-types'



// 管理count 数据的 reducer函数
// 初始值
const initCount = 1
export default function count(state = initCount,action) {
    switch (action.type) {
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state
    }
}