let myDate= new Date
console.log(myDate.toString()) 
console.log(myDate.toDateString()) 
console.log(myDate.toLocaleString()) 
console.log(typeof myDate)


let my = new Date(2024,0,23)     //in js month starts from 0 to 11
console.log(my.toString())


let m=new Date(2024,5,23,5,20)
console.log(m.toString())

let mm=new Date("2024-01-14")       //here the month starts from 01 as usual
console.log(mm.toString())


let nm=new Date("12-04-2026")       //here the format is mm-dd-yyyy     like our indian style
console.log(nm.toString())


let mytimestamp= Date.now()
console.log(mytimestamp)
console.log(mm.getTime())



let ne=new Date()
console.log(ne)
console.log(ne.getMonth())

console.log(ne.toLocaleString('default',{
    weekday: "long"
}))
                                                    //we can write for our suitability


console.log(ne.toLocaleString('default',{
    weekday: "narrow"
}))


console.log(ne.toLocaleString('default',{
    weekday: "short"
}))