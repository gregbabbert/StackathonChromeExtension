let title = document.querySelector('h1')
title.innerHTML = 'fart'

let body = document.querySelector('body')
body.addEventListener("click", (evt) => {
    let value = evt.target.innerHTML;
    alert(value)
})