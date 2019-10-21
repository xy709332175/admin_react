
// reducer函数, 根据原有state 和指定action ,产生并返回新的额state
import {combineReducers} from 'redux'
import count from './count'
import products from './products'


// 向外暴露整合多个reducer产生的总reducer函数   总状态是 对象
/* 
    {
        count :1,
        products : []
    }
*/

export default combineReducers({
    count,
    products
})