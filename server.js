const express = require('express')
const cors = require('cors')

const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, "/public")))

const {testMessage} = require('./controller.js')

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '32e927c44b6742288668c16a45e1074b',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello World')

app.get('/testMessage')

app.get('/public', (req, res) => {
    try {
        rollbar.info('Front-end function called: showPopup');
        res.send('Front-end function called');
    } catch (error) {
        console.log(error);
        rollbar.error('Error occurred while calling front-end function: showPopup');
        res.status(500).send('Error occurred');
    }
});

// try {
//     mysteryFunction();
// } catch (error) {
//     rollbar.error('non-existent function')
//     console.error(error)
// }

app.listen(4956, () => console.log(`server running on 4956`))

// const sequelize = new Sequelize(CONNECTION_STRING, {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false,
//         },
//     },
// });