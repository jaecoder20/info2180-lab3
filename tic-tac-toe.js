window.addEventListener('load', function() {
    let board = document.getElementById('board');
    let divs = board.getElementsByTagName('div');
    console.log(divs);

    for(var i = 0; i < divs.length; i++) {
        divs[i].classList.add('square');
    }
});