
// reducer函数, 根据原有state 和指定action ,产生并返回新的额state
import {INCREMENT,DECREMENT} from './action-types'


// 管理count 数据的 reducer函数
export default function count(state = 1,action) {
    switch (action.type) {
        case INCREMENT:
            return state + action.data
        case DECREMENT:
            return state - action.data
        default:
            return state
    }
}