const testButton = document.getElementById("test-btn")

const showPopup = () => {
    var popup = document.getElementById("popupBox")
    popup.style.display = 'block'
    rollbar.log("popup works")
} 

const hidePopup = () => {
    var popup = document.getElementById("popupBox")
    popup.style.display = 'none'
}

const testMessage = () => {
  axios.get("/api/testMessage")
    .then(res => {
      alert(res.data)
    })
}

testButton.addEventListener('click', testMessage)

