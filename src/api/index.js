
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

//  获取用户列表
 export const reqUsers = () =>  ajax({
     url: '/manage/user/list',
     method : 'GET',
 })

 export const reqWeather = (city) => {

    return new Promise ((resolve,rejejct) => {
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
export const reqSearchProducts = ({
    pageNum,
    pageSize,
    searchType,
    searchName
}) => ajax({
    url: '/manage/product/search',
    params: {
        pageNum,
        pageSize,
        [searchType] : searchName
    }
})