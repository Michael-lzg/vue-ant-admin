import axios from 'axios'

/* 全局默认配置 */
const PRODUCT_URL = '...'
const MOCK_URL = 'xxx'
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? PRODUCT_URL : MOCK_URL

axios.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json'
  return config
}, (error) => {
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  return Promise.reject(error)
})

function get (url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
      .catch(error => {
        reject(error)
      })
  })
}

function post (url, data, loading) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, { loading: loading }).then(
      response => {
        resolve(response.data)
      },
      err => {
        reject(err)
      }
    )
      .catch(error => {
        reject(error)
      })
  })
}

// 导出excel用
function downloadFile (url, data, responseType) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, { responseType: responseType }).then(
      response => {
        resolve(response)
      },
      err => {
        reject(err)
      }
    )
      .catch(error => {
        reject(error)
      })
  })
}

export { get, post, downloadFile }
