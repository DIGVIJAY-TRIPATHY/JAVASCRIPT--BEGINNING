const user={
    username:"rudra",
    logincount:8,
    Signedin:true,
    getuserdetails:function(){
        console.log("got user details from database");
        // console.log(`username:${username}`);   
        console.log(`username:${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
console.log(user.getuserdetails());
