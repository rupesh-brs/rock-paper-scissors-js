// Elements 

const Btn1 = document.getElementById("btn1");
const Btn2 = document.getElementById("btn2");
const Btn3 = document.getElementById("btn3");

const compScore = document.getElementById("comp-score");
const userScore = document.getElementById("user-score");

// console.log(comp.length);

// let ch = Math.floor(Math.random()*comp.length);
// console.log("ch:",ch);
  let userCount = 0;
  let compCount = 0;  
//function for generating computer choice
function compChoice(){
    const comp= ["rock","paper","scissor"];
    let ch = Math.floor(Math.random()*comp.length);
    return comp[ch];

}
// function for comparing user and computer choices 

function compareChoices(userChoice){
    let cmpChoice = compChoice();
    if(userChoice === cmpChoice){
        alert("Its Draw!");
    }
    else if (userChoice === 'rock' && cmpChoice === 'scissor'|| userChoice === 'paper' && cmpChoice==='rock' || userChoice ==='scissor'&& cmpChoice ==='paper'){
        userCount++;
        userScore.textContent = `${userCount}`;
        alert("You Win!")
    }
    else{
        compCount++;
        alert("You Lost!")
        compScore.textContent = `${compCount}`;

    }

}


    
    Btn1.addEventListener("click",function(){
        let res = compareChoices('rock');
        // alert("rock");
        // return res;
    
    });
    Btn2.addEventListener("click",function(){
        let res = compareChoices('paper');
        // alert("paper");
        // return res;
    
    });
    Btn3.addEventListener("click",function(){
        let res = compareChoices('scissor');
        // alert("scissor");
        // return res;
    
    });

  


