function setusername(username){
    //complex db calls
    this.username=username
}

function createuser(username,email,password) {
    setusername.call(this,username)
    //here this is used because the setusername's this will dissapere after the function call and to hold the value we have to use this here
    this.email=email
    this.password=password
}

const chai=new createuser("chai","chai@fb.com","1234")
console.log(chai);
