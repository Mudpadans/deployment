const testButton = document.getElementById("test-btn")
const link = document.querySelector('a')
const popup = document.getElementById("popupBox")
const hideButton = document.getElementById('hide-btn')
const operationSelector = document.getElementById('operation')
const calculatorButton = document.getElementById('calculateButton')


const showPopup = () => {
    // popup.style.display = 'block'
    axios.get("/api/showPopUp")
    .then(res => {
      if (res.data.shouldShowPopup) {
        popup.style.display = 'block';
      }
    })
} 

const hidePopup = () => {
    // popup.style.display = 'none'
    axios.get("/api/hidePopup")
    .then(res => {
      if (!res.data.shouldShowPopup) {
      popup.style.display = 'none';
      }
    })
  }

const testMessage = () => {
  axios.get("/api/testMessage")
    .then(res => {
      alert(res.data)
    })
}

const calculate = () => {
  let operation = document.getElementById("operation").value
  let num1 = parseFloat(document.getElementById("num1").value)
  let num2 = parseFloat(document.getElementById("num2").value)

  axios.post("/api/calculate", {
    operation: operation,
    num1: num1,
    num2: num2
  })
    .then(res => {
      let result = res.data.result;
      document.getElementById("result").innerHTML = "Result: " + result;
    })
    .catch(error => {
      console.error("Error occurred:", error)
    })

}

link.addEventListener('click', showPopup)
hideButton.addEventListener('click', hidePopup)
testButton.addEventListener('click', testMessage)
operationSelector.addEventListener('change', () => {
  const selectedOperation = operationSelector.value;
  calculate(selectedOperation)
})
calculatorButton.addEventListener('click', () => {
  calculate()
})

