import Hangman from './hangman'
import getPuzzle from './requests'


let game1
const puzzleEl = document.querySelector('#puzzle')
const remainingGuessesEl = document.querySelector('#remainingGuesses')
        
const updateDom = function () {

    puzzleEl.innerHTML = ''
    remainingGuessesEl.textContent = game1.statusMessage
    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)

    })
} 

const startGame = async () => {
    const puzzle = await getPuzzle('4')
    game1 = new Hangman(puzzle, 5)
    updateDom()
}

document.querySelector('#reset').addEventListener('click', startGame)

window.addEventListener('keypress', (event) => {
    const guess = String.fromCharCode(event.charCode)
    game1.guess(guess)
    updateDom()
  })


//initialise
startGame()


