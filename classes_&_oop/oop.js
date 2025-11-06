const user={
    username:"rudra",
    logincount:8,
    isloggedin:true,
    getuserdetails:function(){
        console.log("got user details from database");
        // console.log(`username:${username}`);   
        console.log(`username:${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getuserdetails());



function User(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;
    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }
    return this;
}


// const user1=User("rudra",15,true);
// const user2=User("user two changed",150000,true);  

//here the user two rewrite the value of user one
// so we have to use new keyword to avoid this

const user1=new User("rudra",15,true);
const user2=new User("user two changed",150000,true);
console.log(user1);
console.log(user2);


