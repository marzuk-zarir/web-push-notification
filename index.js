const express = require('express')
const cors = require('cors')
const webPush = require('web-push')

const app = express()

const PUBLIC_KEY =
  'BAML37sYnvvLwUATGpPpOPhh1CP4wy7yvsyBfy3JGsFFqsQr1KwXy7ujXeWO6C9BdXOgRbi9rWfm3S76CsnjpeM'
const PRIVATE_KEY = 'wLbPM3awFn8cdlTDb7nf948gnj5TaEOfDKKiqw5Ht3c'

const dummyDb = { subscription: null }

app.use(express.static('public'))
app.use(express.json())
app.use(cors())

webPush.setVapidDetails('mailto:marzukzarir@gmail.com', PUBLIC_KEY, PRIVATE_KEY)

app.post('/api/subscribe', (req, res) => {
  dummyDb.subscription = req.body
  res.sendStatus(201)
})

app.post('/api/sendnotification', (req, res) => {
  res.sendStatus(201)

  console.log(req.body)

  webPush
    .sendNotification(dummyDb.subscription, JSON.stringify({ title: req.body.title }))
    .catch((err) => console.error(err))
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
