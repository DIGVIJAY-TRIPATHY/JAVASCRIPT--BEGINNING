// basic syntax of function

function myname(){          //function declaration
    console.log("R");
    console.log("U");
    console.log("D");
    console.log("R");
    console.log("A");
}
myname()        //function call

function add(num1,num2){
    console.log(num1+num2);
}

add(3,4)
add(3,"4")      //this happens because of number+string
add("3",4)
add(null,4)


const result=add(5,4)
console.log("result:",result);      //here the result will be undefined because in function there are no return values just there is a console which dont help to store the value



function add2(num1,num2){
    let res=num1+num2
    return res      //after return no console.log value can print
    console.log("rudra");  //at this point the console log will not work because of some rules in js
    
}
const res=add2(5,9)
console.log(res);


function add3(num1,num2){
    let resu=num1+num2
    console.log("rudra");
    return resu
}
const resu=add3(5,9)
console.log(res);


function add4(num1,num2){
    return num1+num2
}
const x=add4(5,7)
console.log(x);
console.log(add4(5,89));
add4(5,89)      //there is no log value



function loginuser(user){
    if(user ===undefined){
        console.log("please enter a user name");
        return
    }
    return `${user} just logged in`
}

loginuser("rudra")
console.log(loginuser("rudra"))
console.log(loginuser())



function loginuser2(user="john"){       //here we dont go to if block
    if(user ===undefined){              //when we give some value in function call then the vaue will be changed to the given data
        console.log("please enter a user name");
        return
    }
    return `${user} just logged in`
}
console.log(loginuser2())
console.log(loginuser2("rudra"))





// ***********************************************************************************************************************************************************************








function cardcalculateprice(...num1){       //  ... is the rest/spresd operator which converts all value to a array
    return num1
}

console.log(cardcalculateprice(200,522,1221,987,987,95,215,6498,46));


function cardcalculateprice2(val1,val2,...num1){       //  ... is the rest/spresd operator which converts all value to a array
    return num1
}

console.log(cardcalculateprice2(200,7,95,215,6498,46));

const usern={
    username:"rudra",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `)
}
handleobject(usern)
handleobject({
    username:"digvijay",
    price:899
})

const mynewarray=[200,300,400,500]

function returnsecondvalue(getarray){
    return getarray[1]
}

console.log(returnsecondvalue(mynewarray));
console.log(returnsecondvalue([200,400,600,800]));

