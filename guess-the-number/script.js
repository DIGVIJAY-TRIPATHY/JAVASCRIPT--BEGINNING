let randomnumber=parseInt(Math.random()*100)+1;
const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessfield');
const guessslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastresult');
const loworhigh=document.querySelector('.loworhigh');
const startover=document.querySelector('.resultlast');

const p=document.createElement('p');


let prevguesses=[];
let numGuess = 1

let playgame=true;

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userinput.value)
        validateguess(guess);
    })
}

const validateguess=(guess)=>{
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess<1){
        alert('Please enter a number greater than 0');
    }
    else if(guess>100){
        alert('Please enter a number less than 100');
    }else{
        prevguesses.push(guess);
        if(numGuess===11){
            displayguess(guess);
            displayMessage(`Game Over! The number was ${randomnumber}`);
            endgame();
        }
        else{
            displayguess(guess);
            checkguess(guess);
        }
    }
}
const checkguess=(guess)=>{
    if(guess===randomnumber){
        displayMessage(`Congratulations! You guessed the number ${randomnumber} correctly!`);
        endgame();
    }else if(guess<randomnumber){
        displayMessage(`Your guess is too low!`);
    }
    else if(guess>randomnumber){
        displayMessage(`Your guess is too high!`);
    }
}

const displayguess=(guess)=>{
    userinput.value='';
    guessslot.innerHTML+=`${guess} `;
    numGuess++;
    remaining.innerHTML=`${11-numGuess} guesses remaining`;
}


const displayMessage=(message)=>{
    loworhigh.innerHTML=`<h4>${message}</h4>`;
}

const endgame=()=>{
    userinput.value='';
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">start new game</h2>`
    startover.appendChild(p)
    playgame=false;
    newgame()
}

const newgame=()=>{
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomnumber=parseInt(Math.random()*100)+1;
        prevguesses=[]
        numGuess=1
        guessslot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userinput.removeAttribute('disabled')
        startover.removeChild(p)
        playgame=true
    })
}

