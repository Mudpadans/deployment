const testButton = document.getElementById('test-btn')

const testMessage = (req, res) => {
    let message = "it's a miracle!!"
    res.status(200).send(message)
    
}