// let myname="rudra      "

// console.log(myname.truelength());



let myhero=["thor","spiderman"]
let heropower={
    thor:"hammer",
    spiderman:"sling",

    getspiderpower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}


Object.prototype.rudra= function(){
    console.log(`rudra is present in all objects`);
    
}
// heropower.rudra()
myhero.rudra()

Array.prototype.heyrudra=function(){
    console.log(`hii rudra`);
}

myhero.heyrudra()
// heropower.heyrudra()


const user={
    name:"digvijay",
    email:"d@mail.com"
}

const teacher={
    makevideos:true
}
const teachingsupport={
    isavailable:false
}
const TAsupport={
    makeassignment:"js assignment",
    fulltime:true,
    __proto__:teachingsupport
}
teacher.__proto__=user


//modern syntax

Object.setPrototypeOf(teachingsupport,teacher)


let anotherusername="digvijay        "

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
    
}

anotherusername.truelength()

"rudra".truelength()
"icetea".truelength()