const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result');
    const observe=document.querySelector('#observe')


    if(height ==='' || height<0 || isNaN(height)){
        result.innerHTML=`enter valid height ${height}`
    }
    else if(weight ==='' || weight<0 || isNaN(weight)){
        result.innerHTML=`enter valid weight ${weight}`
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span> ${bmi} </span>`
        if(bmi<18.6){
            observe.innerHTML=`under weight`
        }
        else if(bmi>18.6 && bmi<24.9){
            observe.innerHTML=`normal weight`
        }
        else{
            observe.innerHTML=`over weight`
        }
    }

    
})