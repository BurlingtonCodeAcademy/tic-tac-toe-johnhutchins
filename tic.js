
class Player {
    contructor(name){
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
let whichPlayer = playerX
let text = document.getElementById('playerTurn')

let boxes = document.getElementsByClassName('box')
for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener('click',(e)=>{
        if(whichPlayer === playerX){
            boxes[i].textContent = 'X'
            e.target.className += ' disabled'
            playerX.cellsChosen.push(boxes[i].id)
            if(playerX.cellsChosen.length >= 3){
                isArrWinner(playerX.cellsChosen)
                checkGridFull()
            }
            whichPlayer = playerO
        } else if(whichPlayer === playerO){
            boxes[i].textContent = 'O'
            e.target.className += ' disabled'
            playerO.cellsChosen.push(boxes[i].id)
            if(playerO.cellsChosen.length >= 3){
                isArrWinner(playerO.cellsChosen)
                checkGridFull()
            }
            whichPlayer = playerX
        } else {
            console.log("Catch error in a console log?")
        }
    })
}

let playAgain = document.getElementById('playAgain')
playAgain.addEventListener('click',()=>{
    location.reload()
})



function cleanInput(cellsChosenArray){
    let mutatedArr = cellsChosenArray.sort(function(a, b){return a-b})
    isArrWinner(mutatedArr)
}

function isArrWinner(cleanedArr){
    console.log("array = " + cleanedArr)
    for(let j=0;j<winningPossibilities.length;j++){
        let isWinner = true
        let arr = winningPossibilities[j]
        for(let i=0;i<arr.length;i++){
            if(!cleanedArr.includes(arr[i])){
                isWinner = false
                break
            }
        }
        if(isWinner){
            $('.game-board').replaceWith('<img src="http://www.quickmeme.com/img/5d/5db4d3777ccf3c798b0ae2fc7fdda76cc345da3fae63b335647d8f3fd228fda6.jpg"></img>')
            console.log("WINNER WINNER WINNER WINNER")
            break
        }
    }

    winningPossibilities.forEach((arr)=>{
        if(JSON.stringify(cleanedArr) === JSON.stringify(arr)){
            console.log("weiner")
        }
    })
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
        //$('.game-board').replaceWith('<img src="https://media.makeameme.org/created/yeah-you-guys-8lqkrt.jpg"></img>')
        let board = document.getElementsByClassName('game-board')
        console.log("GAME IS FULL")
        return true
    }
}