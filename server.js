const express = require('express')
const cors = require('cors')

const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, "/public")))

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '32e927c44b6742288668c16a45e1074b',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello World')

app.listen(4956, () => console.log(`server running on 4956`))

// const sequelize = new Sequelize(CONNECTION_STRING, {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false,
//         },
//     },
// });