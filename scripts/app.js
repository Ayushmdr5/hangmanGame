//const game1 = new Hangman('potato', 3)
let game1

puzzelEl = document.querySelector('#puzzle')
guessesEl = document.querySelector('#guesses')

// puzzelEl.textContent = `Guess this word: ${game1.getPuzzel()}`
// guessesEl.textContent = game1.getStatus()

// console.log(game1.getPuzzel())
// console.log(`Remaining guesses :- ${game1.remainingGuess}`)
// console.log(game1.status)

    window.addEventListener('keypress', function(e){
        
        const guess = String.fromCharCode(e.charCode)
        game1.makeGuess(guess)
        // console.log(game1.getPuzzel())
        // console.log(`Remaining Guesses: ${game1.remainingGuess}`)
    
        render()  
    })

    const render = () =>{
        puzzelEl.innerHTML = ''
        guessesEl.textContent = game1.getStatus()  

        game1.getPuzzel().split('').forEach((letter) => {
            const letterEl = document.createElement('span')
            letterEl.textContent = letter
            puzzelEl.appendChild(letterEl)
        })
    }
    
    const startGame = async () => {
        const puzzell = await getPuzzell()
        game1 = new Hangman('masterpiece', 5)
        // console.log(game1)
        render()
    }

    document.querySelector('#reset').addEventListener('click', startGame)
    startGame()

    // getPuzzel('3').then((puzzel)=>{
    //     console.log(puzzel)
    // }, (err) => {
    //     console.log(err)
    // })

    // getCountryDetail('NP').then((country) => {
    //     console.log(country)
    // }, (error) => {
    //     console.log(error)
    // })


    // getPuzzel(4).then((data) => {
    //     console.log(data)
    // }).catch((error) => {
    //     console.log(error)
    // })


    

    // fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    //     return response.json()
    // }).then((data) => {
    //     console.log(data)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // getLocation().then((location) => {
    //     getCountry(location.country).then((country) => {
    //         console.log(`From getlocation '${country.name}'`)
    //     })
    //     // console.log(`Your country is ${location.country} and city is ${location.city}`)
        
    // }).catch((error) => {
    //     console.log(error)
    // })

    // getCountry('NP').then((country) => {
    //     console.log(country.name)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // getLocation().then((location) => {
    //     return getCountry(location.country)
    // }).then((country) => {
    //     console.log(`From getlocation promise chaining '${country.name}'`)
    // }).catch((error) => {
    //     console.log(error)
    // })

    getCurrentLocation().then((country) => {
        console.log(`Your country name is ${country.name}`)
    }).catch((error) => {
        console.log(error)
    })



    // getCountryDetail ('NP', (error, country) => {
    //     if(error){
    //         console.log(error)
    //     }
    //     else if (country){
    //         console.log(country)
    //     }
    // })
   









