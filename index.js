const express = require('express')
const mailer = require('./routes/mailer')
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')


const port = process.env.PORT || 3030

const app = express()
const server = http.Server(app)

app
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(mailer)


  .use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })

  .use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
      message: err.message,
      error: app.get('env') === 'development' ? err : {}
    })
  })

server.listen(port)
