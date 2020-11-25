const getPuzzell = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200){ 
        const data = await response.json()
        return data.puzzel
    }
    else {
        throw new Error('Error in puzzel')
    }
}


const getPuzzelOther = (wordCount) => {
    return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if(response.status === 200){
            return response.json()
        }
        else {
            throw new Error('Error has occured in puzzel')
        }
    }).then((data) =>{
        return data
    })
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if(response.status === 200){
        const countryArray = await response.json()
        const country = countryArray.find((country) => country.alpha2Code === countryCode)
        return country
        
    }
    else {
        throw new Error('Error has occured in get country')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=fb655cc2dfdedd')
    if(response.status === 200){
        const location = await response.json()
        return location
        // or just return response.json() as promise
    }
    else{
        throw new Error('Error has occured in getlocation')
    }
}

const getCurrentLocation = async ()=> {
    const location = await getLocation()
    // return getCountry(location.country) as promise
    const country = await getCountry(location.country)
    return country
}


// const getCountryOld = (countryCode) => {
//     return fetch('//restcountries.eu/rest/v2/all').then((response) => {
//         if(response.status === 200){

//             return response.json()
//         }
//         else {
//             throw new Error('An err has occured in country promise')
//         }
//     }).then((data) => {
//         return data.find((country) => country.alpha2Code === countryCode)
//     })
// }

// const getLocationOld = () => {
//     return fetch('//ipinfo.io/json?token=fb655cc2dfdedd').then((response) => {
//         if(response.status === 200){
//             return response.json()
//         }
//         else{
//             throw new Error('IP error')
//         }
//     }).then((data) => {
//         return data

//     })
// }




// const getPuzzel = (wordCount) =>  {
//     return new Promise ((resolve , reject) => {
//         const request = new XMLHttpRequest()

//         request.addEventListener('readystatechange', (e) => {
//             if (e.target.readyState === 4 && e.target.status === 200){
//                 const data = JSON.parse(e.target.responseText)
//                 resolve(data)
//             }
//             else if (e.target.readyState === 4){
//                 reject('An error has occured')
//             }
//         })
//         request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//         request.send() 
//     })
// }

// const getCountryDetail = (countryCode) => {
//     return new Promise ((resolve, reject) => {
//         const newRequest = new XMLHttpRequest()

//         newRequest.addEventListener('readystatechange', (e) =>{
//             if(e.target.readyState === 4 && e.target.status === 200){
//                 const data = JSON.parse(e.target.responseText)
//                 const country = data.find((country) => country.alpha2Code === countryCode)
//                 resolve(country.name)
//             }
//             else if (e.target.readyState === 4){
//                 reject('Error has occured to country site')
//             }
//         })
//         newRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//         newRequest.send()
//     })
// }
    // const newRequest = new XMLHttpRequest()

    // newRequest.addEventListener('readystatechange', (e) => {
    //     if(e.target.readyState === 4 && e.target.status === 200 ){
    //         const data = JSON.parse(e.target.responseText)
    //         const country = data.find((country) => country.alpha2Code === countryCode)
    //         callback(undefined, country.name)
            
    //         // data.forEach((country) => {
    //         //     if(country.alpha2Code === countryCode){
    //         //         console.log(`Your country name is '${country.name}'`)
    //         //     }
    //         // });


    //     }
    //     else if (e.target.readyState === 4){
    //         callback('Error has occured', undefined)
    //     }
        
    // })

    // newRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    // newRequest.send()    


