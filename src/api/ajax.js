
import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { message } from 'antd'


const instance = axios.create({
    timeout : 10000
})

instance.interceptors.request.use(config => {

    // 在请求前 
    NProgress.start()   // 显示进度条
    
    // 获取请求的data数据
    const {data} = config
    // 判断 data 是否是Object 类型   如果是  将数据类型转换成 urlencod 格式的字符串数据
    if(data instanceof Object){
        config.data = qs.stringify(data)
    }
    
    return config
})

instance.interceptors.response.use(
    /* 判断操作是否成功 */
    /* 判断,如果成功,返回返回的data数据,外部获取想要的数据 */
    /* 判断,如果失败,返回携带的dmsg数据, 外部请求处理错误 */
    

    response => {

        // 在响应后
        NProgress.done() //隐藏进度条

        const result = response.data
        return result
    },
    error => {

        NProgress.done()

        message.error('请求错误:' + error.message)

        //中断Promise
        return new Promise (() => {})
    }
)

export default instance