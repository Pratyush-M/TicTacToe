const gameBoard = (function() {
let playerMoves = ['x','o','x','o','x','o','x','o','x']

return {playerMoves}

})()


const displayController = (function () {
    let listItems = document.getElementsByTagName('li')
    gameBoard.playerMoves.forEach((item, index) => listItems[index].textContent = gameBoard.playerMoves[index])
})()



const gameController = (function () {

})
                                            
