const score=440
console.log(score)
// this will show just answer

const balance =new Number(100)
console.log(balance)
// this will show the like this [Number: 100] because it is declared with Number

console.log(balance.toString().length)
// it will 1st convert to string and then show the length


console.log(balance.toFixed(3))
// it will shows the decimal value till 3 places


const other=23.555
console.log(other.toPrecision(4))
// it will show the total length of number including decimal and before decimal


const othern=23554.555
console.log(othern.toPrecision(4))
// it will show as before written but in this case it will convert some values to exponential form

const hundreds= 10000000000
console.log(hundreds.toLocaleString('en-IN')) 
// it will convert the number to indian format with commas



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //



console.log(Math.abs(-4))
// this will convert negative to positive value


console.log(Math.round(4.5))
// it will round off the value to nearest integer


console.log(Math.ceil(4.1))
// it will round off the value to next integer with upper value


console.log(Math.floor(4.9))
// it will round off the value to next integer with lower value



console.log(Math.min(4,5,6,7,8,9))
// it will give minimum value from the given values


console.log(Math.max(4,5,6,7,8,9))
// it will give maximum value from the given values


console.log(Math.random()) // it will give random number between 0 to 1

console.log(Math.random()*10) // it will give random number between 0 to 10

console.log((Math.random()*10)+1) // it will give random number between 1 to 11


const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min))
// it will give random number between 10 to 20