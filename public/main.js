
const showPopup = () => {
    var popup = document.getElementById("popupBox")
    popup.style.display = 'block'
    rollbar.log("popup works")
} 

const hidePopup = () => {
    var popup = document.getElementById("popupBox")
    popup.style.display = 'none'
}



var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '669e015a1f314342a0f2340aa84451ca',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

