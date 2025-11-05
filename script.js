
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

function getHumanChoice(){
    let Humanchoice = prompt("Enter your choice (rock) (paper) (scissors): ");
    Humanchoice=Humanchoice.toLowerCase();
    if(Humanchoice==="rock"){
        return "rock";
    }
    else if(Humanchoice==="paper"){
        return "paper";
    }
    else if(Humanchoice==="scissors"){
        return "scissors";
    }
}

function WON(score){
    console.log("You WON the Round!!");
    return score+1;
}

function LOST(score){
    console.log("You LOST the Round!! ");
    return score+1;
}
function TIE(){
    console.log("The ROUND TIED play again!! ");
}
function playRound() {
    let human=0;
    let computer =0;
    let round=1;
    while(human!=5 && computer!=5){
        console.log(`<---------- Round${round} ----------> `);
        Humanchoice = getHumanChoice();
        ComputerChoice = getComputerChoice();
        console.log(`You chose: ${Humanchoice} and Computer Choice: ${ComputerChoice}`);

        if(Humanchoice==="rock"){
            if(ComputerChoice==="rock"){
                TIE();
            }
            else if(ComputerChoice==="paper"){
                computer=LOST(computer);
            }
            else {
                human= WON(human);
            }
        }
        else if(Humanchoice==="paper"){
            if(ComputerChoice==="rock"){
                computer=LOST(computer);
            }
            else if(ComputerChoice==="paper"){
                TIE();
            }
            else {
                human= WON(human);
            }
        }
        else if(Humanchoice==="scissors"){
            if(ComputerChoice==="rock"){
                computer=LOST(computer);
            }
            else if(ComputerChoice==="paper"){
                human= WON(human);
            }
            else {
                TIE();
            }
        }
        round++;
    }
    if(computer==5){
        console.log("<-----------You LOST the game , computer won 5 rounds !!------->");
    }
    else{
        console.log("<--------You WON the game , you won 5 rounds !!--------->");
    }
}

playRound();

