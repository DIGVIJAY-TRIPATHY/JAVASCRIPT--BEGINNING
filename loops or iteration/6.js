const mynums=[1,2,3,4]

const mytotal=mynums.reduce(function (acc,curval){
    console.log(`acc:${acc} and curval:${curval}`);
    return acc+curval
},0)

console.log(mytotal);


const mytotal2=mynums.reduce((acc,curval)=>acc+curval,0)
console.log(mytotal2);


const shcard=[
    {
        item:"js",
        price:2999
    },
    {
        item:"python",
        price:299
    },
    {
        item:"java",
        price:999
    },
    {
        item:"ruby",
        price:29999
    }
]


const cardtotal=shcard.reduce((acc,pr)=>acc+pr.price,0)
console.log(cardtotal);
