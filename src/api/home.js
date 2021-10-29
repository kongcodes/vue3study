import request from '@/utils/request'

export function getList(query) {
  return request({
    url: '/list',
    method: 'get',
    params: query,
  })
}
