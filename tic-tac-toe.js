
let divsArray;
let gameState;
let playerObj;
let divs;
let winner;
window.addEventListener('load', function() {
    gameState = {
        "1": [], //row1
        "2": [], //row
        "3": [], //row3
        "4": [], //col1
        "5": [], //col2
        "6": [],  //col3
        "7": [], //dia1
        "8": [], //dia2
        "isFull": 0,
    };
    let board = document.getElementById('board');
    divs = board.getElementsByTagName('div');
    divsArray = Array.from(divs);
    setSqaureDivs(divs);
    setDivIDs(divs);
    hoverable(divs);
    playerObj = { value: "X" };

    divsArray.forEach(div => {
        div.addEventListener('click', hitBoxHandler);
    });
    newGameListener();
    
   
    
    

});

function hitBoxHandler(event){
    place_X_or_O(event, divsArray, playerObj, gameState); 
}


let setSqaureDivs = function(divs){
    for(var i = 0; i < divs.length; i++) {
        divs[i].classList.add('square');
    }
}

let setDivIDs = function(divs){
    for(var i = 0; i < divs.length; i++) {
        curr = i+1;
        divs[i].id = ""+curr;
    }
}
let place_X_or_O = function(event, divs, playerObj, gameState){

    
    let clickedCell = event.target;
    let index = clickedCell.id; 
    console.log(playerObj.value)
    if (divs[index-1].textContent === '') {
        if (playerObj.value==="X"){
            clickedCell.classList.add("X")
        }
        else{
            clickedCell.classList.add("O")
        }
        updateaGameState(index,playerObj,gameState);

        
        clickedCell.textContent = playerObj.value;
        playerObj.value = (playerObj.value === 'X') ? 'O' : 'X';
        checkWinner(gameState, divs);
    }

}

let updateaGameState = function(index,playerObj,gameState){
    if (index==1){
        gameState["1"]+=[playerObj.value];
        gameState["4"]+=[playerObj.value];
        gameState["7"]+=[playerObj.value];
        gameState.isFull+=1;
        
    }
    else if(index==2){
        gameState["1"]+=[playerObj.value];
        gameState["5"]+=[playerObj.value];
        gameState.isFull+=1;
    }
    else if(index==3){
        gameState["1"]+=[playerObj.value];
        gameState["6"]+=[playerObj.value];
        gameState["8"]+=[playerObj.value];
        gameState.isFull+=1;
    }
    else if(index==4){
        gameState["2"]+=[playerObj.value];
        gameState["4"]+=[playerObj.value];
        gameState.isFull+=1;
    }
    else if(index==5){
        gameState["2"]+=[playerObj.value];
        gameState["5"]+=[playerObj.value];
        gameState["7"]+=[playerObj.value];
        gameState["8"]+=[playerObj.value];
        gameState.isFull+=1;
    }
    else if(index==6){
        gameState["2"]+=[playerObj.value];
        gameState["6"]+=[playerObj.value];
        gameState.isFull+=1;
    }
    else if(index==7){
        gameState["3"]+=[playerObj.value];
        gameState["4"]+=[playerObj.value];
        gameState["8"]+=[playerObj.value];
        gameState.isFull+=1;
    }
    else if(index==8){
        gameState["3"]+=[playerObj.value];
        gameState["5"]+=[playerObj.value];
        gameState.isFull+=1;
    }
    else if(index==9){
        gameState["3"]+=[playerObj.value];
        gameState["6"]+=[playerObj.value];
        gameState["7"]+=[playerObj.value];
        gameState.isFull+=1;
    }

}
let disablePlaying = function(divs){
    for (let i = 0; i < divs.length; i++) {
        divs[i].removeEventListener('click', hitBoxHandler)
    }
    for(let i = 0; i < divs.length; i++) {
        divs[i].removeEventListener('mouseenter', function(){
            divs[i].classList.add("hover");
        });
        divs[i].removeEventListener('mouseleave', function(){
            divs[i].classList.remove("hover");
        });

           
        }
}
let checkWinner = function(gameState,divs){
    let div = document.getElementById("status");
    winner = false;
    for (let key in gameState) {
        console.log(winner)
        let value = gameState[key]; 
        if (value[0] === "O" && value[1] === "O" && value[2] === "O") {
            div.classList.add("you-won")
            div.textContent = "Congratulations! O is the Winner!";
            winner = true;
            disablePlaying(divs);
            
        } else if (value[0] === "X" && value[1] === "X" && value[2] === "X") {
            div.classList.add("you-won")
            div.textContent = "Congratulations! X is the Winner!";
            winner = true;
            disablePlaying(divs);
            
        }
        else if ((gameState.isFull==9)&&(winner==false)){
            div.classList.add("you-won");
            div.textContent = "It's a Tie";
        }
    }
}










let hoverable = function(divs){
    for(let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('mouseenter', function(){
            divs[i].classList.add("hover");
        });
        divs[i].addEventListener('mouseleave', function(){
            divs[i].classList.remove("hover");
        });

           
        }
}

function newGameListener(){
    let newGameButton = document.querySelector("button");
    let statusDiv = document.getElementById("status")
    winner = false;
    newGameButton.addEventListener('click', function(){
        for(let i=0;i<divs.length;i++){
            divs[i].textContent = "";
            divs[i].classList.remove("X");
            divs[i].classList.remove("O")
            if(i<9){
            gameState[i+1] = [];
            }
        }
        gameState.isFull = 0;
        divsArray.forEach(div => {
            div.addEventListener('click', hitBoxHandler);
        });
        console.log("Gamestate");
        console.log(gameState);
        playerObj.value="X"
        statusDiv.textContent= "Move your mouse over a square and click to play an X or an O.";
        statusDiv.classList.remove("you-won");
    });
}

