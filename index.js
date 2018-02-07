const express = require('express')
const mailer = require('./routes/mailer')
const http = require('http')
const cors = require('cors')
const bodyParser = require('body-parser')


const PORT = process.env.PORT || 3030

let app = express()
const server = http.Server(app)

app
  .use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
  });
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(mailer)

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
