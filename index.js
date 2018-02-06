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
  .use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://florismeininger.herokuapp.com');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
      });
  .use(mailer)

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
