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
        if (!gameBoard.playerMoves[index] && gameEnded == false){
            gameBoard.playerMoves[index] = moveSelector[moveNumber];
            gameBoard.placeMoves(); 
            console.log(gameBoard.playerMoves)
            winObj.forEach((item, index) => gameStopper(item) )
            moveNumber++
        }
        else {return}
    }))}
    let gameEnded = false;
    let moves = gameBoard.playerMoves
    
    let winObj = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    let gameStopper = function([x,y,z]) {
        if(moves[x] == moves[y] && moves[x] == moves[z] && moves[x]){
            console.log(`${moves[x]} is the winner`);
            gameEnded = true;
        }
        else if (!moves.includes(null)){
            console.log('its a draw')
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