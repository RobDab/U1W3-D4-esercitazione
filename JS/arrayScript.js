let persone = [
    'Zeus',
    'Thor',
    'Rick',
    'Morty'
]

let terzoElemento = persone[2]

console.log(persone)
console.log('terzo elemento è: ' + terzoElemento)

console.log(`lunghezza dell\' array è: ${persone.length}`)

let elementoAggiunto = 'Pippo'
persone.push(elementoAggiunto)
console.log(`il nuovo array è ${persone}`)


let vecchioUltimo = persone.pop()

let nuovoUltimo = persone[persone.length-1]

console.log(`il vecchio ultimo elemento era: ${vecchioUltimo}`)
console.log(`dopo pop(), il nuovo ultimo elemento è: ${nuovoUltimo}`)
console.log(`elemento rimosso è: ${vecchioUltimo}`)

persone.shift()
console.log(persone)

persone.unshift('Pippo')
console.log('dopo l\' unshift(), l\'array appare così:  '+ persone)

let dice = [
    1,
    2,
    3,
    4,
    5,
    6
]

function rollDice() {
    return dice[getRandomInteger(dice.length)]
}

console.log(rollDice())

function getRandomInteger(max){
    return  Math.floor(Math.random()* max)
}
// RETUNR AN INTEGER 0 - (MAX-1)
// QUINDI rollDice() RESTITUIRA' UN ELEMENTO DI dice CON INDICE (dice.lenght -1)

// console.log(getRandomInteger(6))

