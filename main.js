//changed from 'const' to 'let' so value can be reassigned via function; changed value to zero to begin band count at 1 
let bandNumber = 0

//funtion that takes in 'bandName' as argument, adds 1 to value of bandNumber, and returns name and number as a string 
const takeNumber = function (bandName) {
    bandNumber++
    return `${bandNumber}. ${bandName}`
}

const scum = takeNumber("Galactic Scum")
console.log(scum);  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under);