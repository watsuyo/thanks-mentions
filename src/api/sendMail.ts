import request from '../plugins/request'

function sendMail( {api, data}: any ) {
  return request.post(api, {data})
    .then(res => res.data)
    .catch(err => err)
}

export default sendMail
