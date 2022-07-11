//和home 相关的接口写在一块
import request from '@/utils/request'

// export const getRecommendedList=(params)=>{
//     return  request({
//         url:'/personalized',
//         params,
//     })
// }

export const getRecommendedList = (params) =>
  request({
    url: '/personalized',
    params,
  })


  export const getNewsongList = (params) =>
  request({
    url: '/personalized/newsong',
    params,
  })