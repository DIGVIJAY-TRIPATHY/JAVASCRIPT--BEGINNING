const buttons = document.querySelectorAll('.button')
const body=document.querySelector('body')


buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(){
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor=e.target.id
                break;
            case 'red':
                body.style.backgroundColor=e.target.id
                break;
            case 'blue':
                body.style.backgroundColor=e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor=e.target.id
                break;
            default:
                break;
        }
        
        
    })
    
})