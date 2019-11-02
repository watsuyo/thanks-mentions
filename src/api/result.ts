import request from '../plugins/request'

function result(url: string) {
  return request.get(url)
    .then(res => res)
    .catch(err => err)
}

export default result
