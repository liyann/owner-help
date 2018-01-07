import qs from 'qs'
import request from '../utils/request'

export async function login(data) {
  return request('/api/v1/login', {method: 'POST', body: data})
}

export async function FetchRepairList(token, page) {
  return request(`/api/v1/queryMyrepairList?${qs.stringify(page)}`)
}

export async function register() {

}

export async function fetchUserInfo() {
  return request('/api/v1/userInfo', {method: 'POST'})
}

export async function uploadImg(formData) {
  return request('/api/v1/uploadImg', {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}