
let divsArray;
let gameState;
let playerObj;
let divs;
window.addEventListener('load', function() {
    gameState = {
        "row1": [],
        "row2": [],
        "row3": [],
        "col1": [],
        "col2": [],
        "col3": [],
        "diagonal1": [],
        "diagonal2": [],
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
    console.log(divs);
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
        gameState["row1"]+=[playerObj.value];
        gameState["col1"]+=[playerObj.value];
        gameState["diagonal1"]+=[playerObj.value];
        
    }
    else if(index==2){
        gameState["row1"]+=[playerObj.value];
        gameState["col2"]+=[playerObj.value];
    }
    else if(index==3){
        gameState["row1"]+=[playerObj.value];
        gameState["col3"]+=[playerObj.value];
        gameState["diagonal2"]+=[playerObj.value];
    }
    else if(index==4){
        gameState["row2"]+=[playerObj.value];
        gameState["col1"]+=[playerObj.value];
    }
    else if(index==5){
        gameState["row2"]+=[playerObj.value];
        gameState["col2"]+=[playerObj.value];
        gameState["diagonal1"]+=[playerObj.value];
        gameState["diagonal2"]+=[playerObj.value];
    }
    else if(index==6){
        gameState["row2"]+=[playerObj.value];
        gameState["col3"]+=[playerObj.value];
    }
    else if(index==7){
        gameState["row3"]+=[playerObj.value];
        gameState["col1"]+=[playerObj.value];
        gameState["diagonal2"]+=[playerObj.value];
    }
    else if(index==8){
        gameState["row3"]+=[playerObj.value];
        gameState["col2"]+=[playerObj.value];
    }
    else if(index==9){
        gameState["row3"]+=[playerObj.value];
        gameState["col3"]+=[playerObj.value];
        gameState["diagonal1"]+=[playerObj.value];
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
    
    for (let key in gameState) {
        let value = gameState[key]; 
        if (value[0] === "O" && value[1] === "O" && value[2] === "O") {
            div.classList.add("you-won")
            div.textContent = "Congratulations! O is the Winner!";
            disablePlaying(divs);
        } else if (value[0] === "X" && value[1] === "X" && value[2] === "X") {
            div.classList.add("you-won")
            div.textContent = "Congratulations! X is the Winner!";
            disablePlaying(divs);
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


