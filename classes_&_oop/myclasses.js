// ES6

// class user{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptpassword(){
//         return `${this.password}abc`
//     }
//     changeusername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const chai=new user('chai','chai@123','123');

// console.log(chai.encryptpassword());
// console.log(chai.changeusername());


// behind the scene

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptpassword=function(){
    return `${this.password}abc`
}
User.prototype.changeusername=function(){
    return`${this.username.toUpperCase()}`
}

const tea=new User('tea','tea@123','123');
console.log(tea.encryptpassword());
console.log(tea.changeusername());