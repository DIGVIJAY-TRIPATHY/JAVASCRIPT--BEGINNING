// for of loop

const arr=[1,2,3,4,5,]
for (const num of arr) {
    console.log(num);
    
}

const greetings="hello world!"
for (const greet of greetings) {
    console.log(greet);
    
}

// MAPS

const map=new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STSTES OF AMERICA")
map.set('FR',"FRANCE")
map.set('IN',"INDIA")


console.log(map);



for (const [key, value] of map) {
    console.log(key ,":-", value);
    
}








// FOR IN loop
const myobj={
    'game1':'nfs',
    'game2':'spiderman'
}

for (const key in myobj) {
    console.log(key ,":-",myobj[key]);
}



for (const key in arr) {
    
    console.log(key,":-",arr[key]);
    
    
    
}
