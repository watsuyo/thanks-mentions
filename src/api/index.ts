const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.listen(3001)

app.get('/', (req: any, res: any) => {
  res.send('HelloGetWorld')
  console.log('HelloGetWorld')
})

app.post('/sendMail', (req: any, res: any) => {
  const options = {
    method: 'POST',
    json: true,
    url: '',
    headers: {
      "content-type": "application/json"
    },
    body: req.body
  }
  request(options, (err: any, res: any, body: any) => {
    if (!err) {
      res.send(body)
    }
    else {
      res.end('Internal Server Error')
    }
  })
  res.end()
})


export default {
  path: "/api/",
  handler: app
}
