import axios from 'axios'

type TODO = any

export default {
  get(url: string) {
    return axios({
      method: 'GET',
      url: url
    })
    .then(res => res.data)
    .catch(err => err)
  },

  post(url: string, config: TODO) {
    return axios({
      method: 'POST',
      url: url,
      ...config
    })
    .then(res => res.data)
    .catch(err => err)
  },

  put(url: string, config: TODO) {
    return axios({
      method: 'PUT',
      url: url,
      ...config
    })
    .then(res => res.data)
    .catch(err => err)
  },

  delete(url: string, config: TODO) {
    return axios({
      method: 'DELETE',
      url: url,
      ...config
    })
    .then(res => res.data)
    .catch(err => err)
  }
}
