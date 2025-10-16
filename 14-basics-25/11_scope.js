//   {}----it is known as SCOPE

// this is global scope
var c=3     //after the if block executing the c value chaned to 30 and in the outerof the block also the 30 value will be print
if(true){
    let a=10
    const b=20
    var c=30
    // this is block scope
}

// console.log(a);      
// console.log(b);
console.log(c);



let x=500
if(true){
    let x=5
    console.log("inner / block x:",x);
}
console.log("global / outer x:",x);






// ***********************************************************************************************





function one(){
    const username="rudra"
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website);        it will show refference error
    two()
}
one()

if(true){
    const username="rudra"
    if(username==="rudra"){
        const website="insta"
        console.log(username+website);
    }
}








addone(5)
function addone(num){
    return num+1
}



// addtwo(4)           //HOISTING--- accesing/calling before declaration
const addtwo=function(num){     //it will show on this syntax not on previos syntax
    return num+2
}

