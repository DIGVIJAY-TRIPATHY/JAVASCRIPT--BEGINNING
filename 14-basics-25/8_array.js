// these are some simple syntaxes for an array

const myArr=[0,1,2,3,4,5,6,7,8,9]
const hero=["shaktiman","nagraj","power rangers"]
const myArr2=new Array(1,2,3,"Shaktiman")
console.log(myArr2)



// underlines are some array methods

myArr.push(15)  //this is used to add some value to array
myArr.push(11)  //this is used to add some value to array
console.log(myArr)


myArr.pop()     //it will simply remove the lastt item
console.log(myArr)


myArr.unshift(16)   //it will add the element at the 1st place of array
console.log(myArr)


myArr.shift()
console.log(myArr)


console.log(myArr.includes(5))
console.log(myArr.indexOf(15))


console.log(myArr)
console.log(typeof myArr)

const newArr=myArr.join()       //it will convert array to string
console.log(newArr)
console.log(typeof newArr)


console.log("A",myArr)

const my1=myArr.slice(1,3)      //in slice the data is not permanently manipulated from original array
console.log(my1)

console.log("B",myArr)

const my2=myArr.splice(1,3)     //in splice the data is completely manipulated from original array
console.log(my2)

console.log("c",myArr)








const marvel=["thor","ironman","spiderman"]
const dc=["superman","batman","flash"]

marvel.push(dc)         //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]   this is the output
console.log(marvel)        //and here the 3rd element is  [ 'superman', 'batman', 'flash' ] 



const marvell=["thor","ironman","spiderman"]
const dcc=["superman","batman","flash"]


const all=marvell.concat(dcc)
console.log(all)    //here it will conccat the values and we get the true result


// the best way to concat is --
const all_new=[...marvell,...dcc]
console.log(all_new);





const otarray=[0,1,2,[1,2,3],4,5,[7,8,9,[6,7,8]]]
console.log("NORMAL ---",otarray);
console.log("USING FLAT ---",otarray.flat(Infinity));   //IT WILL REMOVE ALL THE INNER BRACKETS



console.log(Array.isArray("RUDRA"));        // it is not an array
console.log(Array.from("RUDRA"));          // it will convert anything to array



let score1=100
let score2=100
let score3=100
let score4=100
console.log(Array.of(score1,score2,score3,score4));         //it will convert or settle these value into array form

