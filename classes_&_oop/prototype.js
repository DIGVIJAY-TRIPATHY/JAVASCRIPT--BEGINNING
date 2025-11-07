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
heropower.rudra()