const input = document.querySelector('input');
const form = document.querySelector('form');
const result = document.querySelector('.result');
const Allguess = document.querySelector('.all-guess');
const submitBtn = document.querySelector('.submit-btn');
const restartBtn = document.querySelector('.restart-game-btn');


function kamini(){
    
const guess = [];

let randomNumber = Math.floor(Math.random() * 100) + 1;

form.addEventListener('submit',  (e) => {
    e.preventDefault();
    const yourNumber = parseInt(input.value);
    if (yourNumber === randomNumber) {
        result.innerText = ' Congrats You Win!!!';
        submitBtn.disabled = true;
        restartBtn.disabled = false; 

    } else if (yourNumber > randomNumber) {
        result.innerText = 'You Chosed Too High!';
    } else {
        result.innerText = 'You Chosed Too Low!';
    }

    guess.push(yourNumber);
    Allguess.innerHTML = `Your Guesses: ${guess.join(', ')}`;
    form.reset();

})


restartBtn.addEventListener('click', () => {
     result.innerText = '';
        Allguess.innerText = '';
        restartBtn.disabled = true;
        submitBtn.disabled = false;
        randomNumber = Math.floor(Math.random() * 100) + 1;
})
}
kamini();