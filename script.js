let popupTitle = document.createElement('h1')
popupTitle.innerHTML = 'Text Speak'
popupTitle.style.textAlign = 'center'
let textAreaEle = document.createElement('textarea')
let playDiv = document.createElement('div')
let playButton = document.createElement('button')
playButton.innerHTML = 'Play'
let pauseButton = document.createElement('button')
pauseButton.innerHTML = 'Pause'
let stopButton = document.createElement('button')
stopButton.innerHTML = 'Stop'

let body = document.querySelector('body.popup')
body.append(popupTitle)
body.style.backgroundColor = '#A9D5EA'
let pageBody = document.querySelectorAll('body')
body.append(textAreaEle)
body.append(playDiv)
playDiv.style.width = '100%'
playDiv.style.alignItems = 'center'
playDiv.style.alignSelf = 'center'
playDiv.append(playButton)
playDiv.append(pauseButton)
playDiv.append(stopButton)

playButton.addEventListener("click", () => {
    speakInput(textAreaEle.value)
})

pauseButton.addEventListener("click", () => {
    pauseSpeak()
})

stopButton.addEventListener("click", () => {
    stopSpeaking()
})

const speakInput = text => {
    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume()
    }
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1
    utterance.addEventListener('end', () => {
        textAreaEle.disabled = false
    })
    textAreaEle.disabled = true
    speechSynthesis.speak(utterance)
}

const pauseSpeak = () => {
    if (speechSynthesis.speaking) speechSynthesis.pause()
}

const stopSpeaking = () => {
    speechSynthesis.resume()
    speechSynthesis.cancel()
}

