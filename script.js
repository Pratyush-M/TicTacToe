const gameBoard = (function() {
let playerMoves = [null,null,null,null,null,null,null,null,null]
let listItems = document.getElementsByTagName('li')
let placeMoves = function() {playerMoves.forEach((item, index) => listItems[index].textContent = playerMoves[index])}

return {playerMoves, listItems, placeMoves}

})()


const displayController = (function () {
    
})()



const gameController = (function () {
    let listItemArray = [...gameBoard.listItems]
    let moveSelector = ['x', 'o', 'x', 'o' , 'x', 'o', 'x', 'o', 'x']
    let moveNumber = 0
    let markSpot = function () {listItemArray.forEach((item, index) => item.addEventListener("click", () => {
        if (!gameBoard.playerMoves[index]){
            gameBoard.playerMoves[index] = moveSelector[moveNumber];
            gameBoard.placeMoves(); 
            console.log(gameBoard.playerMoves)
            gameStopper()
            moveNumber++
        }
        else {return}
    }))}
    let gameStopper = function () {
        let moves = gameBoard.playerMoves
        console.log(moves)
        if(moves[0] == moves[1] && moves[1] == moves[2] && moves[0] ) {
                console.log(`${moves[0]} is the winner`)
        }
    } 
    
    return markSpot()
})()
                                            
const playerFactory = function (name) {
    let playerInfo = {
        playerOne: "praty",
        playerTwo: "simba"
    } 
    return {playerInfo}
}

const playerOne = (function () {
    
})()