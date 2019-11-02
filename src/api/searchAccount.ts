import request from '../plugins/request'

function searchAccount(api: string, shareUrl: string) {
  return request.post(api, {shareUrl})
    .then(res => res.data)
    .catch(err => err)
}

export default searchAccount
