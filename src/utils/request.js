import Storage from '../utils/storage'

export const rootURL = 'http://120.25.85.156'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  console.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: response.statusText,
  })
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  }
  const newOptions = {...defaultOptions, ...options}
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    if (url.includes('login')) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      }
    } else {
      //获取Storage内容是异步的
      const token = await Storage.get('token')
      newOptions.headers = {
        token: token,
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      }
    }
  }

  if (newOptions.headers['Content-Type'] !== 'multipart/form-data') {
    newOptions.body = JSON.stringify(newOptions.body)
  }

  return fetch(`${rootURL}${url}`, newOptions)
    .then(checkStatus)
    .then(response => response.json())
    .catch((error) => {
      if (error.code) {
        console.error({
          message: error.name,
          description: error.message,
        })
      }
      if ('stack' in error && 'message' in error) {
        console.error({
          message: `请求错误: ${url}`,
          description: error.message,
        })
      }
      return error
    })
}
