const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

let ids: any = []

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.listen(3001)

app.get('/', (req: any, res: any) => {
  res.send('HelloGetWorld')
  console.log('HelloGetWorld')
})

app.post('/searchAccount', (req: any, res: any) => {
  const descIndex = req.headers.referer.indexOf('description=')
  const url = decodeURIComponent(req.headers.referer.slice(descIndex + 12))

  const https = require('https')

  const itemIndex = url.indexOf('/items')
  const userPageUrl = url.substring(0, itemIndex)

  https.get(userPageUrl, async (res: any) => {
    let html: string
    res.on('data', (line: any) => html += line)
    res.on('end', async () => {
      const before = html.indexOf('twitter"><a target="_blank" href="https://twitter.com/')
      if(before === -1) return console.log('Twitterアカウントを見つけられませんでした。')
      const editedHTML = html.slice(before + 54)
      const after = editedHTML.indexOf('">')
      const twitterId = editedHTML.slice(0,after)
      let aa = () => {
        ids.push(twitterId)
      }
      await aa()
    })
  })
})

app.get('/result', (req: any, res: any) => {
  res.json({
    message:"Hello,world"
  })
})


export default {
  path: "/api/",
  handler: app
}
