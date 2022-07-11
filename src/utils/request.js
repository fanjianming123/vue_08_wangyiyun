//对axios 的封装
import axios from 'axios'

// axios.defaults.baseURL='http://localhost:3000'
// export default axios
// axios.create({}) ==>axios实例
const request = axios.create({  //配置项可以写在一起  可以配置生成不一样的 request
  baseURL: 'http://localhost:3000',
})

export default request
