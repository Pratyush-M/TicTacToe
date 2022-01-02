const gameBoard = (function() {
let playerMoves = [null,'o',null,'o',null,'o','x','o','x']
let listItems = document.getElementsByTagName('li')
let placeMoves = function() {playerMoves.forEach((item, index) => listItems[index].textContent = playerMoves[index])}

return {playerMoves, listItems, placeMoves}

})()


const displayController = (function () {
    
})()



const gameController = (function () {

})
                                            
const playerFactory = function (name) {
    let playerInfo = {
        playerOne: "praty",
        playerTwo: "simba"
    } 
    return {playerInfo}
}

const playerOne = (function () {
    let listItemArray = [...gameBoard.listItems]
    console.log(listItemArray)
    let markSpot = listItemArray.forEach((item, index) => item.addEventListener("click", () => {gameBoard.playerMoves[index] = 'x';
    gameBoard.placeMoves();
    console.log(gameBoard.playerMoves);
}))
    return markSpot
})()
