window.addEventListener('load', function() {
    let gameState = [];
    let board = document.getElementById('board');
    let divs = board.getElementsByTagName('div');
    setSqaureDivs(divs);
    add_X_O(divs);

    

});


let setSqaureDivs = function(divs){
    for(var i = 0; i < divs.length; i++) {
        divs[i].classList.add('square');
    }
}

let add_X_O = function(divs){
    x = true;
    for(let i = 0; i < divs.length; i++) {
        if (x==true){
            divs[i].addEventListener('click', function(){
                divs[i].classList.add("X");
                divs[i].textContent = "X";
            });
            x=false;
        }
        else{
            divs[i].addEventListener('click', function(){
                divs[i].classList.add("O")
                divs[i].textContent = "O";
            });
            x=true;
        }
    }
}



