// 对axios 封装
import axios from 'axios';

//方法一
// axios.defaults.baseURL = 'http://localhost:3000'
// export default axios

//方法二 (推荐)
const request = axios.create({
  //配置项可以写在一起
  baseURL: 'http://localhost:3000',
});
export default request;
    