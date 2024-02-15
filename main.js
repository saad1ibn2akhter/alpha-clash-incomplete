// function play(){
//     document.getElementById('home-screen').classList.add("hidden");
//     document.getElementById("play-ground").classList.remove("hidden");
// }

let xyz;

function continueGame()
{
    const alphabet = getRandomAlphabet();

    const currenAlphabetElement = document.getElementById('current-alphabet');
    currenAlphabetElement.innerText = alphabet;
    
    setBackgroundColorById(alphabet);

}

function keyboardButtonPress(event)
{
    const playerPressed = event.key;
    console.log('player pressed : ' , playerPressed);

    // expected value
    const currenAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currenAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    if(playerPressed === expectedAlphabet)
    {
        console.log("you got a point!!");

        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        const newScore = currentScore + 1;

        currentScoreElement.innerText = newScore;

        removeBackgroundByid(expectedAlphabet);
        continueGame();
        
    }else{
        console.log("you made a mistake!!");
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife - 1;
        if(currentLife === 1)
        {
            const scorePage =document.getElementById('result-page');
            scorePage.classList.remove('hidden');
            const playPage = document.getElementById('play-ground');
            playPage.classList.add('hidden');

            const finalScoreElement = document.getElementById('final-score');
            const score = document.getElementById('current-score');

            finalScoreElement.innerText = score.innerText;
            

            currentLifeElement.innerText = newLife-newLife;
        }
        currentLifeElement.innerText = newLife;

    }
}

document.addEventListener('keyup',keyboardButtonPress);

const playAgainButton = document.getElementById('play-again');
playAgainButton.addEventListener('click',function(){
    document.getElementById('result-page').classList.add('hidden');
    document.getElementById('play-ground').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
    
});

function play()
{
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame(); 
}
