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

// const url = location.href
// const title = document.title
// console.log(title + '\n' + url);

// const https = require('https')

// const index = url.indexOf('/items')
// const userPageUrl = url.substring(0, index)

// https.get(userPageUrl, (res: any) => {
//   let html: string
//   res.on('data', (line: any) => html += line)
//   res.on('end', () => {
//     const before = html.indexOf('twitter"><a target="_blank" href="https://twitter.com/')
//     const editedHTML = html.slice(before + 54)
//     const after = editedHTML.indexOf('">')
//     const twitterId = editedHTML.slice(0,after)
//   })
// })

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
