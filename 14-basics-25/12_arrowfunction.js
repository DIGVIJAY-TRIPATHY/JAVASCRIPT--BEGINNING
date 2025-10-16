const user={
    username:"rudra",
    price :999,
    welcomemessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}
user.welcomemessage()
user.username="chandan"
user.welcomemessage()




function chai(){
    let userr="rudra"
    console.log(this.userr);
}
chai()


// ARROW FUNCTION =>

const chai2=function(){
    let userrr="rudra"
    console.log(this.userr);
}
chai2()




const chai3=()=>{
    let userrr="rudra"
    console.log(this.userr);
}
chai3()



const addtwo=(n1,n2)=>{
    return n1+n2
}
console.log(addtwo(5,4))


const addtwoo=(n1,n2)=> n1+n2   //this is implicit return
console.log(addtwoo(5,6));



const aaddtwoo=(n1,n2)=> (n1+n2)   //  () used to return somewhere any objects
console.log(aaddtwoo(5,6));


const aadddtwoo=(n1,n2)=> ({usernamee:"rudra"})   //  () used to return somewhere any objects
console.log(aadddtwoo());


