//require('babel-polyfill')
const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}


const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const data = await response.json()
        
        return data.find(country => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to find country')
    }

}


const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=753ffe5d883fcd')

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch location')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}

export {
    getPuzzle as default
}

// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch the puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }

// const getCountryOld = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to find country')
//         }
//     }).then((data) => {
//         let myCountry = data.find(country => country.alpha2Code === countryCode)
//         return myCountry
//     })
// }

// const getLocationOld = () => {
//     return fetch('http://ipinfo.io/json?token=753ffe5d883fcd').then((response) => {

//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch location')
//         }
        
//     })
// }
