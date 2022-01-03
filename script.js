const gameBoard = (function() {
let playerMoves = [null,null,null,null,null,null,null,null,null]
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
    let markSpot = function () {listItemArray.forEach((item, index) => item.addEventListener("click", () => {
        if (!gameBoard.playerMoves[index]){
            gameBoard.playerMoves[index] = 'x';
            gameBoard.placeMoves();
        }
        else {return}
        }))}
    return markSpot()
})()