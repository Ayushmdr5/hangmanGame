class Hangman {
    constructor(word, remainingGuess){
        this.word = word.toLowerCase().split('')
        this.remainingGuess = remainingGuess
        this.letterGuessed = []
        this.status = 'Playing'          
    }

    calculateStatus(){
        const finished = this.word.every((letter) => this.letterGuessed.includes(letter) || letter === ' ')
        // {
        //     return this.letterGuessed.includes(letter)
        // }
    
        if(this.remainingGuess<=0){
            this.status= 'Failed'
        } 
        else if (finished){
            this.status= 'Finished'
        }
        else{
            this.status= 'Playing'
        }
        return this.status      
    }

    getStatus(){
        if(this.status==='Playing'){
            return `Guesses left: ${this.remainingGuess}`
        }
        else if (this.status=== 'Failed'){
            return `Nice try... the word was "${this.word.join('')}" :p`
        }
        else {
            return 'Great Job! You won... '
        }
    }
    getPuzzel(){
        let puzzel = ''

        this.word.forEach((letter) => {
            if (this.letterGuessed.includes(letter) || letter === ' '){
                puzzel = puzzel + letter
            }
            else{
                puzzel += '*' //puzzel = puzzel + '*'
            }
        });
    return puzzel
    }

    makeGuess(guess){
        guess = guess.toLowerCase()
        const isUnique = !this.letterGuessed.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if(this.status!= 'Playing'){
            return
        }

        if (isUnique){
            this.letterGuessed.push(guess)
        }

        if (isUnique && isBadGuess){
            this.remainingGuess-- //this.remainingGuess = this.remainingGuess - 1

        }
        this.calculateStatus()
        }
}


//*** DONE USING CONSTRUCTOR FUNCTION ***

// const Hangman = function(word, remainingGuess){
//     this.word = word.toLowerCase().split('')
//     this.remainingGuess = remainingGuess
//     this.letterGuessed = []
//     this.status = 'Playing'
// }

// Hangman.prototype.calculateStatus = function(){
//     // let finished = true
//     // this.word.forEach((letter) =>{
//     //     if (this.letterGuessed.includes(letter)){
//     //         //finished = true
//     //     }
//     //     else{
//     //         finished = false
//     //     }
//     // })

//     const finished = this.word.every((letter) => this.letterGuessed.includes(letter))
//     // {
//     //     return this.letterGuessed.includes(letter)
//     // }

//     if(this.remainingGuess<=0){
//         this.status= 'Failed'
//     } 
//     else if (finished){
//         this.status= 'Finished'
//     }
//     else{
//         this.status= 'Playing'
//     }
//     return this.status
// }

// Hangman.prototype.getStatus = function (){
//     if(this.status==='Playing'){
//         return `Guesses left: ${this.remainingGuess}`
//     }
//     else if (this.status=== 'Failed'){
//         return `Nice try... the word was "${this.word.join('')}" :p`
//     }
//     else {
//         return 'Great Job! You won... '
//     }
// }

// Hangman.prototype.getPuzzel = function (){
//     let puzzel = ''

//     this.word.forEach((letter) => {
//         if (this.letterGuessed.includes(letter) || letter === ' '){
//             puzzel = puzzel + letter
//         }
//         else{
//             puzzel += '*' //puzzel = puzzel + '*'
//         }
//     });

//     return puzzel
// }

// Hangman.prototype.makeGuess = function (guess){
//     guess = guess.toLowerCase()
//     const isUnique = !this.letterGuessed.includes(guess)
//     const isBadGuess = !this.word.includes(guess)

//     if(this.status!= 'Playing'){
//         return
//     }

//     if (isUnique){
//         this.letterGuessed.push(guess)
//     }

//     if (isUnique && isBadGuess){
//         this.remainingGuess-- //this.remainingGuess = this.remainingGuess - 1

//     }
//     this.calculateStatus()
// }





// const game2 = new Hangman('hey lady', 4)
// game2.makeGuess('h')

// console.log(game2.getPuzzel())
// console.log(`Remaining guesses :- ${game2.remainingGuess}`)
