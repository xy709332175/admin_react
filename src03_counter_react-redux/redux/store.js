// redux 核心管理对象
import {createStore} from 'redux'
import reducer from './reducer'

// 向外部默认暴露一个对象
export default createStore(reducer)