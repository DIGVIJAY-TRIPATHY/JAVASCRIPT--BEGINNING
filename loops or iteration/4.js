const coding=["js","ruby","java","python","cpp"]

const values=coding.forEach( (item) => {
    console.log(item);
    return item     //for each will not return any value
})
console.log(values);


const mynum=[1,2,3,4,5,6,7,8,9,10]
const newnum=mynum.filter( (NUM)=> NUM>4)
console.log(newnum);


// these two are exactly same but we have to use the return keyword when we use "{}" curly braces
const newnum2=mynum.filter( (NUM)=> {
    return NUM>4    //we must have to write return keyword
})
console.log(newnum2);






const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userbooks= books.filter((bk)=>bk.genre==='History')
console.log(userbooks);


const userbooks2=books.filter((bk)=>{ return bk.publish>=2000})
console.log(userbooks2);


const userbooks3=books.filter((bk)=>{ return bk.publish>=1900 && bk.genre==='Non-Fiction'})
console.log(userbooks3);


const userbooks4=books.filter((bk)=>{ return bk.publish>=1995 && bk.genre==='History'})
console.log(userbooks4);