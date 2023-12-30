var scoreboard = document.getElementsByClassName('place');
var userScore = localStorage.getItem('userScore');
var userName = localStorage.getItem('userName')
var clearBoardBtn = document.getElementById('clear')
var emptyPlace = document.getElementById('spare').querySelector('.place')

    scoreboard[1].innerHTML = JSON.parse(localStorage.getItem('2'));
    scoreboard[2].innerHTML = JSON.parse(localStorage.getItem('3'));
    scoreboard[3].innerHTML = JSON.parse(localStorage.getItem('4'));
    scoreboard[4].innerHTML = JSON.parse(localStorage.getItem('5'));
    scoreboard[5].innerHTML = JSON.parse(localStorage.getItem('6'));
    scoreboard[6].innerHTML = JSON.parse(localStorage.getItem('7'));
    scoreboard[7].innerHTML = JSON.parse(localStorage.getItem('8'));
    scoreboard[8].innerHTML = JSON.parse(localStorage.getItem('9'));
    scoreboard[9].innerHTML = JSON.parse(localStorage.getItem('10'));

for (i in scoreboard) {
    console.log(scoreboard[i])
}
console.log(emptyPlace, 'empty')
for (i in scoreboard) {
    var placeName = scoreboard[i].children[0];
    var placeScore = scoreboard[i].children[1];
    var placeScoreValue = JSON.parse(placeScore.innerHTML)
    if (userScore > placeScoreValue) {
        placeName.innerHTML = userName;
        placeScore.innerHTML = userScore;
        break
    }
}

localStorage.setItem('1', JSON.stringify(scoreboard[0].innerHTML));
localStorage.setItem('2', JSON.stringify(scoreboard[1].innerHTML));
localStorage.setItem('3', JSON.stringify(scoreboard[2].innerHTML));
localStorage.setItem('4', JSON.stringify(scoreboard[3].innerHTML));
localStorage.setItem('5', JSON.stringify(scoreboard[4].innerHTML));
localStorage.setItem('6', JSON.stringify(scoreboard[5].innerHTML));
localStorage.setItem('7', JSON.stringify(scoreboard[6].innerHTML));
localStorage.setItem('8', JSON.stringify(scoreboard[7].innerHTML));
localStorage.setItem('9', JSON.stringify(scoreboard[8].innerHTML));
localStorage.setItem('10', JSON.stringify(scoreboard[9].innerHTML));