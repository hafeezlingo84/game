

var character = document.getElementById('character');

var block = document.getElementById('block');

block.style.display = 'none';
character.style.display = 'none';

function start() {

    block.style.display = 'block';
    character.style.display = 'block';
}

var score = 0;

function jump() {
    character.classList.add('animation');
    setTimeout(function () {
        character.classList.remove('animation');
    }, 500)
    score += 1;
    document.getElementById("score").innerHTML = score;
}


var checkDead = setInterval(function () {

    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = 'none';
        block.style.display = 'none';

        alert('u lose')
    }

}, 10);

function reload() {
    window.location.reload();
}
