const express = require('express')
const mailer = require('./routes/mailer')
const http = require('http')

const PORT = process.env.PORT || 3030

let app = express()
const server = http.Server(app)

app
  .use(mailer)

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
