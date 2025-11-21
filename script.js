let humanscore=0;
let Computerscore=0;

function getComputerChoice(){
    let choice = Math.random();
    if(choice<=0.33){
        return "rock";
    }
    else if(choice <= 0.66){
        return "paper";
    }
    else{
        return "scissors";
    }   
}
let scorecard=document.querySelector('.scorecard');
let current=document.querySelector('.present-round');
let final=document.querySelector('.Final');
function playgame(hchoice){
    if(humanscore==5 || Computerscore==5){
        return;
    }
    else{
        let cchoice= getComputerChoice();
        if(hchoice=='rock'){
            if(cchoice=='rock'){
                current.innerText="You chose Rock and The Computer also chose Rock , Its a Tie";
            }
            else if(cchoice=='paper'){
                current.innerText="You chose Rock and The Computer chose paper, YOU LOST!!";
                Computerscore++;

            }
            else if(cchoice =='scissors'){
                current.innerText="You chose Rock and the Computer chose Scissors, You Won!!";
                humanscore++;
            }
        }
        else if(hchoice=='paper'){
            if(cchoice=='rock'){
                current.innerText="You chose Paper and The Computer chose Rock , You Won";
                humanscore++;
            }
            else if(cchoice=='paper'){
                current.innerText="You chose Paper and The Computer chose paper, It is a TIE!!";

            }
            else if(cchoice =='scissors'){
                current.innerText="You chose Paper and the Computer chose Scissors, You Lost!!";
                Computerscore++;
            }
        }
        else {
            if(cchoice=='rock'){
                current.innerText="You chose Scissors and The Computer chose Rock , You Lost!!";
                Computerscore++;
            }
            else if(cchoice=='paper'){
                current.innerText="You chose Scissors and The Computer chose paper, You WIN!!";
                humanscore++;

            }
            else if(cchoice =='scissors'){
                current.innerText="You chose Scissors and the Computer chose Scissors, It is a TIE!!";
            }
        }
        scorecard.innerText=`Your Score:-${humanscore} Computer Score:-${Computerscore}`;
        if(humanscore==5){
            final.innerText="You WON The game, refresh to play again";
        }
        else if(Computerscore==5){
            final.innerText="Computer WON The game, refresh to play again";
        }
    }
}

