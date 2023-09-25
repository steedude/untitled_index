import request from '@/utils/request'

export function getTestData() {
  return request.get('/test')
}
