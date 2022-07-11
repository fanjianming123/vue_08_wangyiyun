//Home相关的接口
import request from "@/utils/request";

export const getRecommendList = params => 
    request({
        url:'/personalized',
        params
    })

    // '/personalized/newsong'
    export const getNewsongList = params => 
    request({
        url:'/personalized/newsong',
        params
    })