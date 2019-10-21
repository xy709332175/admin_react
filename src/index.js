import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './containers/App'
import store from './redux/store'


// 给容器组件添加store对象
ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,document.getElementById('root'))

