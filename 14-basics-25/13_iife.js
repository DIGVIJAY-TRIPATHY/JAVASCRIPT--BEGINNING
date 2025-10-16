// IIFE---> Immediately Invoked Function Expression

function chai(){
    console.log(`DB connected`);
}
chai();


// if we will try to do it by iife then we have write this




(function chai2(){
    //this is NAMED IIFE
    console.log(`DB connected IIFE`);
})();



(()=>{
    //this is UNNAMED IIFE
    console.log(`DB connected arrow`);
    
})();       //here the semicolumn is must if we are writing more than one function with iife
//it wont show syntax error but it wil show error when it run 


((name)=>{
    //this is unnamed iife with parameter
    console.log(`DB connected arrow ${name}`);
    
})("rudra");





