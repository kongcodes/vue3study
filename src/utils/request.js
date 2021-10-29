import axios from 'axios'
// 可以导入element plus 的弹出框代替alert进行交互操作

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL, // 使用设置好的全局环境
  timeout: 30 * 1000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // 此处可以执行处理添加token等逻辑
    // config.headers["Authorization"] = getToken();
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data // 根据接口返回参数自行处理

    if (res.code !== 200) {
      if (res.code === 50000) {
        // 根据状态码自行处理
        alert('服务器内部出现异常，请稍后再试')
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      // 成功返回
      return Promise.resolve(res)
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service
