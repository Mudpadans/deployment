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

app.get('http://localhost:4956/api/showPopup', (req, res) => {
    const shouldShowPopup = true;
    res.status(200).send({ shouldShowPopup });
    rollbar.info("popup shows up")
})

app.get('http://localhost:4956/api/hidePopup', (req, res) => {
    const shouldShowPopup = false;
    res.status(200).send({ shouldShowPopup });
    rollbar.info("popup hidden")
})

app.get('http://localhost:4956/api/testMessage', (req, res) => {
    res.status(200).send("it's a miracle!!")
    rollbar.info("it's a miracle!!")
})

app.post('http://localhost:4956/api/calculate', (req, res) => {
    const { operation, num1, num2 } = req.body

    let result
    switch (operation) {
        case "addition":
          result = num1 + num2;
          break;
        case "subtraction":
          result = num1 - num2;
          break;
        case "multiplication":
          result = num1 * num2;
          break;
        case "division":
        if (num2 === 0) {
            rollbar.critical("attemped to divide by zero")
            return res.status(400).send({ error: "Division by zero is not allowed" });
        }
          result = num1 / num2;
          break;
        default: 
          return res.status(400).send({ error: "Invalid operation" });
    }
    

    res.status(200).send({ result })
})

try {
    mysteryFunction();
} catch (error) {
    rollbar.error('non-existent function')
    rollbar.warning("unused function")
    console.error(error)
}

app.listen(4956, () => console.log(`server running on 4956`))

