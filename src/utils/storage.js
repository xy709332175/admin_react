//  local数据存储的工具函数封装

import store from 'store'

// 保存指定的key和value 的数据
function set (key, value) {
    store.set(key, value)
}

// 获取指定的key对应的值,若没有,返回默认值
function get (key, defaultValue) {
    if(defaultValue === undefined) {
        throw new Error ('get() 必须指定默认值' )
    }

    return store.get(key, defaultValue)
}

// 删除指定的key的数据,若不传,删除所有
function remove(key) {
    if (key) {
        store.remove(key)
    } else {
        store.clearAll()
    }
}

export default {
    set,
    get,
    remove,
    KEYS: {
        USER_KEY: 'user_key',
        TOKEN_KEY: 'token_key'
    }
}