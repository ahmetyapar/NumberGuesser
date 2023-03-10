let min = 1;
let max = 10;

const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const btn = document.querySelector(".btn");
const guess = document.querySelector(".input");
const message = document.querySelector("#message");

minNum.textContent = min;
maxNum.textContent = max;


let guessesLeft = 3;
let winningNumber = randomNum(max,min);

btn.addEventListener("click",gameStart);

function gameStart(){
    let number= parseInt(guess.value);

    if(isNaN(number) || number > max || number < min ) {
        setMessage(`Please enter a number between ${minNum.textContent} and ${maxNum.textContent}`);
        
        
    } else if (number === winningNumber){
        setMessage(`${winningNumber} is correct, YOU WON!`,"green");
        finished("green");
    } else {
        guessesLeft -= 1;
        if(guessesLeft>0){
            setMessage(`${number} is not correct, ${guessesLeft} guesses left`,"red");
            guess.value = "";
        }else {
            setMessage(`You LOST!`,);
            finished("red");
            btn.value = "Try again ...";
            btn.addEventListener("click",reset);
            

        }
        
    }

    

    
    
}

function finished(color){
    guess.style.borderColor = color;
    guess.disabled = true;
}

function setMessage(msg,color){
    message.innerHTML = msg;
    message.style.color = color;
}

function reset(){
    document.location.reload();
    btn.value = "Submit";
}

function randomNum(max,min){
    return Math.floor(Math.random()*(max-min+1)+min);
}
