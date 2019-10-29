
// 包含借口请求函数的模块

import ajax from './ajax'
import jsonp from 'jsonp'
import {message} from 'antd'

// 登录  返回promise
 export const reqLogin = ({username, password}) => ajax({
     url: '/login',
     method: 'POST',
     data: {username, password}
 })

 export const reqWeather = (city) => {

    return new Promise ((resolve,reject) => {
        const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`

        jsonp(url, {}, (err,data) => {
            
            if(!err && data.status === 'success') {
                const {dayPictureUrl, weather} = data.results[0].weather_data[0]
                resolve({dayPictureUrl, weather})
            } else {
                message.error('获取天气失败')
                return new Promise (() => {})
            }
        })
    })

 }

//  获取所有分类的列表
export const reqCategorys = () => ajax('/manage/category/list')

//  添加分类
export const reqAddCategory = (categoryName) => ajax.post('/manage/category/add', {categoryName})

// 更新分类
export const reqUpdateCategory = ({categoryId, categoryName}) => ajax({
    url: '/manage/category/update',
    method: 'POST',
    data: {categoryId, categoryName}
})

// 获取商品分类列表
export const reqProducts = (pageNum, pageSize) => ajax({
    url: '/manage/product/search',
    params: {
        pageNum,
        pageSize,
    }
})

export const reqCategory = (id) => ajax({
    url: '/manage/category/info',
    params: {
        categoryId : id
    }
})

export const reqSearchProducts = ({
    pageNum,
    pageSize,
    searchType,
    searchName,
}) => ajax ({
    url: '/manage/product/search',
    params: {
        pageNum,
        pageSize,
        [searchType] : searchName
    }
})

export const reqUpdateProductStatus = (productId,status) => ajax({
    url:  '/manage/product/updateStatus',
    method: 'POST',
    data: {
        productId,
        status
    }
})

export const reqProductById = (id) => ajax({
    url: '/manage/product/info',
    params: {productId: id}
})

export const reqAddUpdateProduct = (product) => ajax.post(
    '/manage/product/' + (product._id ? 'update' : 'add'),
    product
)

export const reqDeleteImg = (name) => ajax.post('/manage/img/delete', {name})

export const reqRoles = () => ajax('/manage/role/list')
export const reqAddRole = (roleName) => ajax.post('/manage/role/add', {roleName})
export const reqUpdateRole = (role) => ajax.post('/manage/role/update', role)
export const reqUsers = () => ajax('/manage/user/list')
export const reqDeleteUser = (userId) => ajax.post('/manage/user/delete', {userId})
export const reqAddOrUpdateUser = (user) => ajax.post('/manage/user/' + (user._id ? 'update' : 'add'), user)