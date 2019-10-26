import axios from 'axios'

export default {
  get(url: string, config: any) {
    return axios({
      method: 'GET',
      url: url,
      ...config
    })
    .then(res => res.data)
    .catch(err => err)
  },

  post(url: string, config: any) {
    return axios({
      method: 'POST',
      url: url,
      ...config
    })
    .then(res => res.data)
    .catch(err => err)
  },

  put(url: string, config: any) {
    return axios({
      method: 'PUT',
      url: url,
      ...config
    })
    .then(res => res.data)
    .catch(err => err)
  },

  delete(url: string, config: any) {
    return axios({
      method: 'DELETE',
      url: url,
      ...config
    })
    .then(res => res.data)
    .catch(err => err)
  }
}
