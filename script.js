/* put the variable page at 1 by default because it's the first time the page load */
let page = 'start'

 /* add a button depending on if it's the first time the page load and start a game or if you want to restart another game */
let button = document.createElement('button')

/* Displaying 'Start' or 'Restart' if the user already play */
if (page === 'start'){
    button.innerHTML = 'Start'
} else if (page = 'ingame') {
    button.hidden
} else {
    button.innerHTML = 'Restart'
}
/* adding a class name to apply a style on the button */
button.className = 'playButton'

/* store the container and display the button inside */
const divButton = document.getElementById('buttonContainer')
divButton.appendChild(button)

/* Adding some style to the button */
button.style.width = "134px"
button.style.height = "45"
button.style.margin = "auto"
button.style.border = "3px solid black"
button.style.borderRadius = "50px"
button.style.padding = "5px"
button.style.fontSize = "20px"
button.style.backgroundColor = "#82B6D9"
button.style.boxShadow = "10px 10px #00000040"
button.style.fontWeight = "bold"
