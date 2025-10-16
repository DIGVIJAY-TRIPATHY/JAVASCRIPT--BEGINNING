for (let i = 0; i < 10; i++) {
    const element = i;
    if (element==5) {
        console.log("5 is best number ");
    }
    console.log(element);
}


for (let i = 0; i < 10; i++) {
    console.log(`outer loop : ${i}`);
    

    for (let j = 0; j < 10; j++) {
      console.log(`inner loop value : ${j} and inner loop : ${i}`);
      
    }
    
}



for (let i = 1; i <= 10; i++) {
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}




let myArr=["flash","batman","superman"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
    
    
}



// BREAK AND CONTINUE

for (let i = 0; i < 10; i++) {
    if (i==5) {
        console.log("5 detected");
        break
    }
    console.log(`the value of i is : ${i}`);
}

console.log("this is the end of break statement");


for (let i = 0; i < 10; i++) {
    if (i==5) {
        console.log("5 detected");
        continue
    }
    console.log(`the value of i is : ${i}`);
}