import request from '@/utils/request'

export async function queryCurrent(): Promise<any>{
  return request('/api/currentUser')
}

export async function queryDetail(): Promise<any>{
  return request('/api/getUserDetail')
}

export async function logout(): Promise<any>{
  return request('/api/logout')
}
