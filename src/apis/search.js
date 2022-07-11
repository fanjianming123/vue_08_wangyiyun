// /search/default

//Home相关的接口
import request from '@/utils/request';

export const getSearchTag = (params) =>
  request({
    url: '/search/hot',
    params,
  });
// /cloudsearch
export const getSearchList = (params) =>
  request({
    url: '/cloudsearch',
    params,
  });
