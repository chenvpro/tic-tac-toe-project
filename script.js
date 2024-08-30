/* variable needed to made the game work */
let page = 'start' // the button need to display 'start' if it's the first time game
let playerTurn = '1' // the game start with the first player
const cells = [...document.querySelectorAll('.cell')]
const winConditions =  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let options = ["", "", "", "", "", "", "", "", ""]

 /* store a button that will show 'start' or 'restart' depending on if it's the first game or if the players want to replay */
const button = document.createElement('button')

/* displaying 'Start' or 'Restart' if the user already play */
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

/* adding some style to the button */
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
button.style.cursor = "pointer"

function initalizeGame() {
    
}

function cellClicked() {
    
}

button.addEventListener('click', (e) => {
    page = 'ingame'
    initalizeGame()
})