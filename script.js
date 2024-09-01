/* variable needed to made the game work */
let page = 'start' // the button need to display 'start' if it's the first time game
let currentPlayer = 'X' 
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
/* store the container and display the button inside */
const divButton = document.getElementById('buttonContainer')
divButton.appendChild(button)
buttonDisplay()
/* style for the button */
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


/* display of the button depending on the value of the variable 'page' */
function buttonDisplay() {
    if (page === 'start'){
        button.innerHTML = 'Start'
    } else if (page = 'ingame') {
        button.style.visibility ="hidden"
    } else {
        button.innerHTML = 'Restart'
    }
}

function messageStyle() {
    /* style of the message box */
    message.style.width = '155px'
    message.style.margin = '0 auto 50px auto'
    message.style.position = 'relative'
    message.style.top = '25px'
    message.style.fontFamily = 'Gravitas One'
    message.style.fontSize = '24px'
}

/* creating a message box that will show the current player turn and if the game end it will show the winner player */
const message = document.createElement('p')
message.innerHTML = `${currentPlayer}'s turn !` // showing the player turn
const divMessage = document.getElementById('message')
divMessage.appendChild(message)
messageStyle()
message.style.visibility = 'hidden'

function initalizeGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked))
    page = 'ingame'
    message.style.visibility = 'visible'
    buttonDisplay()
}

function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex")
    if (options[cellIndex] != "" || page != 'ingame') {
        return
    }
    updateCell(this, cellIndex)
    checkWinner()
}

function updateCell(cell, index) {
    options[index] = currentPlayer
    cell.textContent = currentPlayer
}

function changePlayer() {
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X'
    message.textContent = `${currentPlayer}'s turn !`
    /* style of the message box */
    messageStyle()
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
        message.textContent = `${currentPlayer}'s wins !`
        message.style.width = '157px'
    } else if (!options.includes("")){
        message.textContent = 'Draw !'
        message.style.width = '111px'
    } else {
        changePlayer()
    }
    
    if(roundWon || !options.includes("")){
        page = 'restart'
        button.innerHTML = 'Restart'
        button.style.visibility = 'visible'
        cells.forEach(cell => cell.style.cursor = 'auto')
    }
}

button.addEventListener('click', (e) => {
    currentPlayer = 'X' // the game start with the first player
    options = ["", "", "", "", "", "", "", "", ""]
    message.textContent = `${currentPlayer}'s turn !`
    cells.forEach(cell => cell.textContent = "")
    initalizeGame()
})