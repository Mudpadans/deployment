const testButton = document.getElementById("test-btn")
const popup = document.getElementById("popupBox")
const link = document.querySelector('a')
const hideButton = document.getElementById('hide-btn')

const showPopup = () => {
    // popup.style.display = 'block'
    axios.get("http://localhost:4956/api/showPopUp")
    .then(res => {
      if (res.data.shouldShowPopup) {
        popup.style.display = 'block';
      }
    })
} 

const hidePopup = () => {
    // popup.style.display = 'none'
    axios.get("http://localhost:4956/api/hidePopup")
    .then(res => {
      if (!res.data.shouldShowPopup) {
      popup.style.display = 'none';
      }
    })
  }

const testMessage = () => {
  axios.get("http://localhost:4956/api/testMessage")
    .then(res => {
      alert(res.data)
    })
}

link.addEventListener('click', showPopup)
hideButton.addEventListener('click', hidePopup)
testButton.addEventListener('click', testMessage)
