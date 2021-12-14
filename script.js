let title = document.querySelector('h1')
title.innerHTML = 'fart'

let textAreaEle = document.createElement('textarea')
let playDiv = document.createElement('div')
let playButton = document.createElement('button')
playButton.innerHTML = 'Play'
let pauseButton = document.createElement('button')
pauseButton.innerHTML = 'Pause'
let stopButton = document.createElement('button')
stopButton.innerHTML = 'Stop'

let body = document.querySelector('body.popup')
body.style.backgroundColor = '#A9D5EA'
let pageBody = document.querySelectorAll('body')
body.append(textAreaEle)
body.append(playDiv)
playDiv.append(playButton)
playDiv.append(pauseButton)
playDiv.append(stopButton)

playButton.addEventListener("click", () => {
    alert('play')
})


pageBody[1].addEventListener("click", (evt) => {
    let pValue = evt.target.textContent;
    textAreaEle.value = pValue
    alert(pValue)
})