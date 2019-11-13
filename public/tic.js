class Player {
    constructor(name){
        this.name = name
    }
    cellsChosen = []
}
let playerX = new Player('Player X')
let playerO = new Player('Player O')

let winningPossibilities = [
    ['1','2','3'],
    ['1','5','9'],
    ['1','4','7'],
    ['2','5','8'],
    ['3','5','7'],
    ['3','6','9'],
    ['4','5','6'],
    ['7','8','9']
]

let arr = []
let gameBoard = document.getElementById("game-board")
startGame()

function startGame(){

    let playAgain = document.getElementById('playAgain')
    playAgain.addEventListener('click',()=>{
        location.reload()
    })

    this.innerHTML = ''
    let whichPlayer = playerX
    let text = document.getElementById('playerTurn')
    text.innerText = 'Player X Turn'

    let boxes = document.getElementsByClassName('box')
    for(let i=0;i<boxes.length;i++){ 
        boxes[i].addEventListener('click',(e)=>{
            arr.push(boxes[i].id)
            if(whichPlayer === playerX){
                text.innerText = 'Player O Turn'
                boxes[i].textContent = 'X'
                e.target.className += ' disabled'
                playerX.cellsChosen.push(boxes[i].id)
                if(playerX.cellsChosen.length >= 3){
                    checkGridFull()
                    isArrWinner(playerX.cellsChosen)
                }
                whichPlayer = playerO
            } else if(whichPlayer === playerO){
                text.innerText = 'Player X Turn'
                boxes[i].textContent = 'O'
                e.target.className += ' disabled'
                playerO.cellsChosen.push(boxes[i].id)
                if(playerO.cellsChosen.length >= 3){
                    checkGridFull()
                    isArrWinner(playerO.cellsChosen)
                }
                whichPlayer = playerX
            } else {
                console.log("Catch error in a console log?")
            }
        })
    }
}

function isArrWinner(cleanedArr){
    let winningArr = []
    for(let j=0;j<winningPossibilities.length;j++){
        let isWinner = true
        let arr = winningPossibilities[j]
        for(let i=0;i<arr.length;i++){
            if(!cleanedArr.includes(arr[i])){
                isWinner = false
                break
            } else if(!winningArr.includes(arr[i])){
                winningArr.push(arr[i])
            } else {

            }
        }
        if(isWinner){
            let gameBoard = document.getElementById('game-board')
            let playerTurnText = document.getElementById('playerTurn')
            gameBoard.classList += ' disabled'
            gameBoard.innerHTML = `<img src="http://www.quickmeme.com/img/5d/5db4d3777ccf3c798b0ae2fc7fdda76cc345da3fae63b335647d8f3fd228fda6.jpg"></img>`
            playerTurnText.innerHTML ='<h1>' + whichPlayer.name + ' wins!!!!</h1>'
            console.log("winning array = " + winningArr)
            console.log("WINNER WINNER WINNER WINNER")
            break
        }
    }
}

function checkGridFull(){
    let boxes = document.getElementsByClassName('box')
    for(let k=0;k<boxes.length;k++){
        if(boxes[k].classList.contains === 'disabled'){
            if(!arr.includes(boxes[k].id)){
                arr.push(boxes[k].id)
            }
        }
    }
    if(arr.length === 9){
        let board = document.getElementById('game-board')
        board.innerHTML = '<img src="https://media.makeameme.org/created/yeah-you-guys-8lqkrt.jpg"></img>'
        return true
    }
}

let count = 5

function timer(){
    setInterval(countDown,1000)
}

function countDown(){
    if(count <= 0){
        clearInterval(countDown)
        count = 5
    } else {
        count--
        console.log("Count = " + count)
    }
}