import axios from 'axios'

const apiBaseUrl = '/api';

type TODO = any

export default {
  get(url: string) {
    return axios({
      method: 'GET',
      url: `${apiBaseUrl}${url}`
    })
    .then(res => res.data)
    .catch(err => err)
  },

  post(url: string, params: TODO) {
    return axios({
      method: 'POST',
      url: `${apiBaseUrl}${url}`,
      ...params
    })
    .then(res => res.data)
    .catch(err => err)
  },

  put(url: string, params: TODO) {
    return axios({
      method: 'PUT',
      url: `${apiBaseUrl}${url}`,
      ...params
    })
    .then(res => res.data)
    .catch(err => err)
  },

  delete(url: string, params: TODO) {
    return axios({
      method: 'DELETE',
      url: `${apiBaseUrl}${url}`,
      ...params
    })
    .then(res => res.data)
    .catch(err => err)
  }
}
