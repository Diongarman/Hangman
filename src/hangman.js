class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    get puzzle() {
        let puzzle = ''


        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
    
        return puzzle
    }

    guess (letter) {
        if (this.status !== 'playing') {
            return
        }
        const guess = letter.toLowerCase()
        const haveNotAlreadyGuessed = !this.guessedLetters.includes(guess)
        const letterNotInWord = !this.word.includes(guess)
        
        if (haveNotAlreadyGuessed && !letterNotInWord) {
            this.guessedLetters.push(guess)
        } 
            
        if (haveNotAlreadyGuessed && letterNotInWord) {
            this.remainingGuesses--
            this.guessedLetters.push(guess)
        }
        this.statusUpdate()
    }

    get statusMessage() {
        if (this.status === 'playing') {
            return `guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            return `Nice try, the word was: "${this.word.join('')}"`
        } else if (this.status === 'finished') {
            return 'Well done! You guessed the word correctly.'
        }
    }

    statusUpdate() {
  
        let finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
    
        if (this.remainingGuesses === 0) {
            this.status = 'failed'
            console.log(this.status)
        } else if (finished) {
            this.status = 'finished'
            console.log(this.status)
        } else {
            this.status = 'playing'
            console.log(this.status)
        }
    }
}

export {
    Hangman as default
}

