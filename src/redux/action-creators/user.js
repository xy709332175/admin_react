import { reqLogin } from '../../api'
import { message } from 'antd'

import {SAVE_USER_TOKEN, REMOVE_USER_TOKEN} from '../action-types'
import storage from "../../utils/storage"

// 同步保存user 和token 的action creator
const  saveUserToken = (user, token) => ({type:SAVE_USER_TOKEN, data:{user, token}})

export const removeUserToken = () => {
    // 清除local中的user 和 token
    storage.remove(storage.KEYS.USER_KEY)
    storage.remove(storage.KEYS.TOKEN_KEY)

    return {type: REMOVE_USER_TOKEN}
}

// 登录请求的异步 action creator
export function loginAsync(username, password) {
    // 返回一个异步 action 函数
    return async dispatch => {
        const result = await reqLogin({username, password})
        // 根据结果分发同步action
        if(result.status === 0){
            const {user, token} = result.data
            // 将user和local保存到local中
            storage.set(storage.KEYS.USER_KEY,user)
            storage.set(storage.KEYS.TOKEN_KEY,token)

            // 分发保存user 和token 信息的同步action
            dispatch(saveUserToken(user, token))
        }  else {
            // 登录失败
            message.error(result.msg)
        }
    }   
}