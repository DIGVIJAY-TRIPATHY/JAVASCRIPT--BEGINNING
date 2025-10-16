const name="hello"
const age=200
console.log(`my name is ${name} and my age is ${age}1`)


// through this we can use many more methods
const newname= new String("digvijay")
console.log(newname)

console.log(newname[2])   //through this we can access the characters of string
console.log(name[2])    //through this we cant access the characters of string


console.log(newname.length)
console.log(newname.toUpperCase())
console.log(newname.charAt(1))
console.log(newname.indexOf('j'))



const newstring=newname.substring(0,4)
console.log(newstring)


const anotherstring=newname.slice(-6,4)
console.log(anotherstring)

const neww="   digvijay   "
console.log(neww)
console.log(neww.trim())   //through this we can remove the extra spaces from starting and ending


const url="https://www.youtube%20tt.com"
console.log(url.replace('%20','-'))  //through this we can replace any character with another character
console.log(url.includes('tt'))  //through this we can check whether the string contains the given character or not
console.log(url.split('.'))  //through this we can split the string into an array based on the given character