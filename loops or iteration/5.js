const mynums=[1,2,3,4,5,6,7,8,9,10]

const newnums=mynums.map((num)=>num+10)
console.log(newnums);


const newnums2=mynums.map((num)=>{return num+10})
console.log(newnums2);

console.log(mynums.map((num)=>num+100));



// CHAINING
const newnums3=mynums
    .map((num)=>num*10)
    .map((num)=>num+1)
    .filter((num)=>num>=40)
    //we can write it in a singele line
    //for better view i write it in different lines
    
console.log(newnums3);

