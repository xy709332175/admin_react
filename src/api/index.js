
// 包含借口请求函数的模块

import ajax from './ajax'

// 登录  返回promise
 export const reqLogin = ({username, password}) => ajax({
     url: '/login',
     method: 'POST',
     data: {username, password}
 })