import axios from 'axios'
import { Message } from 'element-ui'
import config from '@/constants'

import EventBus from '@/event-bus'

// create an axios instance
const service = axios.create({
  baseURL: config.apiUrl,
  headers: config.headers
  // timeout: 15000
})
console.log(config.apiUrl)

function message(msg, type) {
  Message({
    message: msg,
    showClose: true,
    type
  })
}

// request interceptor
service.interceptors.request.use(
  serviceConfig => {
    return serviceConfig
  },
  error => {
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status === 200 && res.display) {
      message(res.message, 'success')
    }
    return response
  },
  error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const res = error.response
      // Unauthorized
      if (res.status === 401) {
        // TODO: Logic for refresh token
        message('this user is un-authorized', 'error')
        // Logout the user
        EventBus.$emit('logOut')
      } else if (res.status === 400 && res.data.message) {
        message(res.data.message, 'error')
      } else if (res.status === 500) {
        message('Please try again later', 'error')
      }
    } else if (error.request) {
      // The request was made but no response was received
      // message('Please try again later', 'error')
    }
    return Promise.reject(error.response)
  }
)

export default service
