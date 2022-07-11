import request from '@/utils/request';
export const getRecommendList = (params) =>
  request({
    url: '/personalized',
    params,
  });
export const getNewSongList=(params)=>
request({
    url: '/personalized/newsong',
    params,
  });
