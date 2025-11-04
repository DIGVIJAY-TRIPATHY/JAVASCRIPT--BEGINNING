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


const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"XXXX", email:"chai@example.com"})
    },1000)
})
promise3.then(function(user){
    console.log(user);
    
})


const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"XXXX", password:"123"})
        }
        else{
            reject('ERROR : SOMETHING WENT WRONG')
        }
    },1000)
})
promise4.then((user)=>{
    console.log(user);
    return user.username  
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log(`promise either rejected or resolved`);
    
})


const promise5= new Promise(function(resolve,reject){
        setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript", password:"123"})
        }
        else{
            reject('ERROR : JS WENT WRONG')
        }
    },1000)
});

async function consumePromise5(){
    try{
        const response = await promise5
    console.log(response);
    } catch(error){
        console.log(error);
        
    }
}
consumePromise5()

// async function getallusers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data=await response.json()
//         console.log(data);
//     } catch(error){
//         console.log(error);
//     }
// }
// getallusers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})