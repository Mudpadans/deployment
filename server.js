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

app.get('/api/showPopup', (req, res) => {
    const shouldShowPopup = true;
    res.status(200).send({ shouldShowPopup });
    rollbar.info("popup shows up")
})

app.get('/api/hidePopup', (req, res) => {
    const shouldShowPopup = false;
    res.status(200).send({ shouldShowPopup });
    rollbar.info("popup hidden")
})

app.get('/api/testMessage', (req, res) => {
    res.status(200).send("it's a miracle!!")
    rollbar.info("it's a miracle!!")
})

try {
    mysteryFunction();
    rollbar.warning("unused function")
} catch (error) {
    rollbar.error('non-existent function')
    console.error(error)
}

app.listen(4956, () => console.log(`server running on 4956`))

