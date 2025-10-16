//  singleton   is made when we declare through constructor
// Object.create



// OBJECT LITERALS

const jsuser={
    name:"rudra",
    "fullname":"digvijay tripathy",
    age:20,
    location:"kjr",
    email:"tri@gmail.com",
    isloggedin:false,
    lastlogin:["monday","saturday"]
}


// the ways we can acces from JSUSER

console.log(jsuser.email);
// through this method we cant acces the full name .... To access the fullname we have to use sq bracket method

// console.log(jsuser[email]);   we directly cant use this because email is choosen as a string
//so we have to do this like this
console.log(jsuser["email"]);
console.log(jsuser["fullname"]);        //through this only we can acces fullname otherwise not



const symb=Symbol("key1")

const jsuser2={
    name:"rudra",
    "fullname":"digvijay tripathy",
    // symb:"key 1",        this is the wrong way here the type is string not symbol
    [symb]:"my key 1", //this is the correct way to write a symbol
    age:20,
    location:"kjr",
    email:"tri@gmail.com",
    isloggedin:false,
    lastlogin:["monday","saturday"]
}

console.log(jsuser2[symb]);
console.log(typeof jsuser2[symb]);

console.log(jsuser2);

jsuser2.email="digvijay@mail.com"       //this is the syntax for changing the value of a key
console.log(jsuser2);

Object.freeze(jsuser2)          //if i will freeze anything then we cant modify the value after that
jsuser2.email="overpower@mail.com"      //this value is not going to change anything 
console.log(jsuser2);



const jsuser3={
    name:"rudra",
    "fullname":"digvijay tripathy",
    age:20,
    location:"kjr",
    email:"tri@gmail.com",
    isloggedin:false,
    lastlogin:["monday","saturday"]
}

jsuser3.greeting=function(){        //here we declared a function
    console.log("hello js user");
}
jsuser3.greeting()


jsuser3.greeting2=function(){           //here also we declared a function but we fetched some value with "THIS" keyword
    console.log(`hello js user ${this.fullname}`);      
}
jsuser3.greeting2()


// --------------------------------------******************----------------------------------------------------------------------------------


// this is singleton object creation through constructor
const tind=new Object()       //this is the syntax to create a object through constructor
// these are the another way to create object but works same as non-singleton object
console.log(tind);

tind.id="tinder001"
tind.name="tinder"
tind.isloggedin=false
console.log(tind);



const regular={
    email:"kwejkwj@gmail.com",
    fullname:{
        userfullname:{
            firstname:"digvijay",
            lastname:"tripathy"
        }
    }
}

console.log(regular.fullname);
console.log(regular.email);

console.log(regular.fullname.userfullname.firstname);       //this is the way to fetch the nested object value


console.log(Object.keys(regular));       //this will give the keys of the object in array form
console.log(Object.values(regular));    //this will give the values of the object in array form
console.log(Object.entries(regular));    //this will give the key value pair of the object in array form
console.log(regular.hasOwnProperty("email"));   //this will check the property is present or not and return boolean value
console.log(regular.hasOwnProperty("emailid"));   //this will check the property is present or not and return boolean value




const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}


// const obj3={obj1,obj2}        //this is the way to merge two objects
// console.log(obj3);           //but this is not the correct way to merge two objects

                //.assign({target},sources)
const obj3=Object.assign({},obj1,obj2)      //this is the correct way to merge two objects
console.log(obj3);



const obj4={...obj1,...obj2}     //this is the best way to merge two objects
console.log(obj4);




// ----------------------------------------------------------------------------------------------------------------------------




const course={
    coursename:"js in hindi",
    price:999,
    courseInstructor:"digvijay tripathy",
}


const {courseInstructor}=course      //this is called object destructuring
console.log(courseInstructor);

const {courseInstructor:instructor}=course  //it will change the name from courseinstructor to instructor
console.log(instructor);




