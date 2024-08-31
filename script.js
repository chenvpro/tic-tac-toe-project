/* variable needed to made the game work */
let page = 'start' // the button need to display 'start' if it's the first time game
let currentPlayer = 'X' // the game start with the first player
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
function buttonDisplay() {
    if (page === 'start'){
        button.innerHTML = 'Start'
    } else if (page = 'ingame') {
        button.remove()
    } else {
        button.innerHTML = 'Restart'
    }
}
buttonDisplay();
button.className = 'playButton' // adding a class name to apply a style on the button
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
    cells.forEach(cell => cell.addEventListener('click', cellClicked))
    page = 'ingame'

    /* creating a message box that will show the current player turn and if the game end it will show the winner player */
    const message = document.createElement('h2')
    message.innerHTML = `${currentPlayer}'s turn !` // showing the player turn
    const divMessage = document.getElementById('message')
    divMessage.appendChild(message)
    /* adding some style to the message box */
    message.style.margin = 'auto'
    message.style.fontFamily = 'Gravitas One'
    message.style.width = '154px'
    message.style.position = 'relative'
    message.style.top = '50px'
    buttonDisplay()
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex")
    if (options[cellIndex] != "" || page != 'ingame') {
        return
    }
    updateCell(this, cellIndex)
    changePlayer()
    checkWinner()
}

function updateCell(cell, index) {
    options[index] = currentPlayer
    cell.textContent = currentPlayer
}

function changePlayer() {
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X'
}

function checkWinner() {
    let roundWon = false
    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i]
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]
        if (cellA == "" || cellB == "" || cellC == "") {
            continue
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true
            break
        }
    }
    if (roundWon) {
          
    }

}

function restartGame() {

}

button.addEventListener('click', (e) => {
    initalizeGame()
})