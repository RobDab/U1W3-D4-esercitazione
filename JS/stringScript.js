let testString = prompt('declare a string','this is a test string')
console.log(testString)

let testStringUpper = testString.toUpperCase()
console.log(testStringUpper)

let testStringLower = testStringUpper.toLowerCase()
console.log(testStringLower)

let stringaEsempio = 'roberto'

console.log(stringaEsempio)

console.log('il primo elemento della stringa è: ' + affetta(stringaEsempio,0))

let nuovaString = affetta(stringaEsempio,1).concat(affetta(stringaEsempio,3))
console.log('la nuova stringa formata da elementi separati dalla precedente è: ' + nuovaString)


function affetta(exString, i){
    let element = exString[i]

    return element
}

