import {
    RECIVE_CATEGORYS,
    ADD_CATEGORY,
    UPDATE_CATEGORY
} from '../action-types'

import {
    reqCategorys,
    reqAddCategory,
    reqUpdateCategory
} from '../../api'

import Category from '../../containers/category'

// 同步action creator
const receiveCategorys = (categorys) => ({type:RECIVE_CATEGORYS, data: categorys})
const addCategory = (category) => ({type:ADD_CATEGORY, data: category})
const updateCategory = (category) => ({type:UPDATE_CATEGORY, data: category})


// 获取所有分类列表
export const getCategorysAsync = () => {
    return async dispatch => {
        const result = await reqCategorys()
        if(result.status === 0) {
            const categorys = result.data
            dispatch(receiveCategorys(categorys))
        }
        return result.msg
    }
}

// 添加分类的异步
export const addCategoryAsync = (categoryName) => {
    return async dispatch => {
        const result = await reqAddCategory(categoryName)
        if(result.status === 0){
            const category = result.data
            dispatch(addCategory(category))
        }
        return result.msg
    }
}

// 更新分类的异步
export const updateCategoryAsync = ({categoryTd, categoryName}) => {
    return async dispatch => {
        const result = await reqUpdateCategory({categoryTd, categoryName})
        if(result.status === 0) {
            const category = {_id: categoryTd, name: categoryName}
            dispatch(updateCategory(category))
        }
        return result.msg
    }
}