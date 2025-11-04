const promiseone=new Promise(function(resolve,reject){
    // do an async task
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseone.then(function(){
    console.log(`promise consumed`);
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`async task 2`);
        resolve()
        
    },1000)
}).then(function(){
    console.log(`Async 2 resolved`);
    
})