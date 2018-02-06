const express = require('express')
const mailer = require('./routes/mailer')
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')


const PORT = process.env.PORT || 3030

let app = express()
const server = http.Server(app)

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(mailer)

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
