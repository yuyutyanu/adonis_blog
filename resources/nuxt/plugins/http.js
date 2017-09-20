import axios from 'axios'
import Vue from 'vue'

let http = http || {}

http.factory = () => {
  return axios.create({
    baseURL: 'http://0.0.0.0:3333/api/v1/'
  })
}

http.install = (Vue, options) => {
  Vue.prototype.$http = () => {
    return http.factory()
  }
}

Vue.use(http)

export default http
