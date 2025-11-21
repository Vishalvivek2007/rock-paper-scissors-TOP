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
function playgame(hchoice){
    if(humanscore==5 || Computerscore==5){
        return;
    }
    else{
        let cchoice= getComputerChoice();
        if(hchoice=='rock'){
            if(choice=='rock'){
                
            }
        }
    }
}

