// redux 核心管理对象
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// 总状态 reducer {count,products}
import reducer from './reducers'

// 判断当前环境是否是开发环境
const IS_DEV = process.env.NODE_ENV === 'development'

// 向外部默认暴露一个store对象
export default createStore(
    reducer,
    IS_DEV ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
    )
    // 应用redux异步中间件