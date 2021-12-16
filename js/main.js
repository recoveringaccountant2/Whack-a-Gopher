////////// audio //////////

// probably won't use all of these.  anything funny I could find on a sound board.  

const welcome = new Audio('audio/Theme.mp3');
const killGophers = new Audio('audio/kill-all-the-gophers.mp3');
const freezeGopher = new Audio('audio/freeze-gopher.mp3');
const beTheBall = new Audio('audio/bthball.mp3');
const nanaLong = new Audio('audio/putting.mp3');
const nanaShort = new Audio('audio/nananana.mp3');
const thisYourPlace = new Audio('audio/awfulPlace.mp3');
const basho = new Audio('audio/basho.mp3');
const beTheBall2 = new Audio('audio/betheball.mp3');
const likeYouBetty = new Audio('audio/betty.mp3');
const cinderella = new Audio('audio/cinderla.mp3');
const youTakeDrugsDanny = new Audio('audio/drugs.mp3');
const eatYoung = new Audio('audio/eatyoung.mp3');
const gungaShort = new Audio('audio/gungagag.mp3');
const hat = new Audio('audio/hat.mp3');
const letsGo = new Audio('audio/letsgo.mp3');
const lumberyards = new Audio('audio/lumberyards.mp3');
const missPutt = new Audio('audio/missputt.mp3');
const ohBilly = new Audio('audio/ohBilly.mp3');
const russia = new Audio('audio/russia.mp3');
const slice = new Audio('audio/slice.mp3');
const thankYouVeryLittle = new Audio('audio/thankyou.mp3');
const waiting = new Audio('audio/waiting.mp3');
const auRevoirGopher = new Audio('audio/au revoir gopher.mp3');
const thanksForNothing = new Audio('audio/thanks-for-nothing.mp3');
const areYouMyPal = new Audio('audio/winner.mp3');
const punch = new Audio('audio/PUNCH.mp3');
// template to add more audio
// const  = new Audio('audio/');


////////// screen 1 //////////

// clear screen 1 and set up screen 2

// set single event listener for audio and style changes
document.addEventListener('click', clearScreenOne);

function clearScreenOne() {
    // start theme song
    musicWelcome();
    // delay in style changes so that they hit with timing of music downbeat
    setTimeout(function(){ screenStyleTransitionOneTwo(); }, 800);
};

// play theme music
function musicWelcome() {
    welcome.play();
    // volume set lower so other audio elements will sit on top of mix
    welcome.volume = 0.25;
    // remove event listener 
    document.removeEventListener('click', clearScreenOne);
}

// style transition, hide, unhide elements
function screenStyleTransitionOneTwo() {
    // hide all welcome screen elements
    document.getElementById('screen-1').style.display = 'none';
    // display character text
    document.getElementById('character-title').style.display = 'block';
    // display character images
    document.getElementById('character-grid').style.display = 'grid';
    // display enter your name text
    document.getElementById('name-title').style.display = 'block';
    // display name input field
    document.getElementById('player-name').style.display = 'inline-block';   
    // display button
    document.getElementById('begin').style.display = 'inline-block';   
    // hide golf course background 
    document.getElementById('body').style.backgroundImage = 'none';
}
    










////////// screen 2 //////////

////////// select character //////////

// define character options

const character = [
    {name: 'Ty Webb', photoUrl: 'imgs/ty2.jpeg'},
    {name: 'Lacey Underall', photoUrl: 'imgs/lacey.png'},
    {name: `Maggie O'Hooligan`, photoUrl: 'imgs/maggie.jpeg'},
    {name: 'Al Czervik', photoUrl: 'imgs/danger2.jpeg'},
    {name: 'Judge Elihu Smails', photoUrl: 'imgs/judge.png'},
    {name: 'Carl Spackler', photoUrl: 'imgs/carl2.png'},
    {name: 'Mrs. Smails', photoUrl: 'imgs/mrssmails.jpeg'},
    {name: 'Danny Noonan', photoUrl: 'imgs/danny.jpeg'},
];

// create empty element to hold character selected

let characterSelected = null



function clearCharacterSelection() {
    // clear frame from any previously selected characters
    document.getElementById('ty').style.border = 'none';
    document.getElementById('lacey').style.border = 'none';
    document.getElementById('maggie').style.border = 'none';
    document.getElementById('al').style.border = 'none';
    document.getElementById('judge').style.border = 'none';
    document.getElementById('carl').style.border = 'none';
    document.getElementById('mrssmails').style.border = 'none';
    document.getElementById('danny').style.border = 'none';

    // turn off and reset any previous audio (except theme song)
    likeYouBetty.pause();
    likeYouBetty.currentTime = 0;
    youTakeDrugsDanny.pause();
    youTakeDrugsDanny.currentTime = 0;
    thanksForNothing.pause();
    thanksForNothing.currentTime = 0;
    hat.pause();
    hat.currentTime = 0;
    areYouMyPal.pause();
    areYouMyPal.currentTime = 0;
    gungaShort.pause();
    gungaShort.currentTime = 0;
    thankYouVeryLittle.pause();
    thankYouVeryLittle.currentTime = 0;
    beTheBall.pause();
    beTheBall.currentTime = 0;

    // clear border

    // document.getElementByClassName('character').style.border = 'none';
    // document.getElementsByClassName('character').style.border = 'none';
    // document.querySelector('character').style.border = 'none';
    // document.querySelectorAll('character').style.border = 'none';


}













// event listener for Ty
document.getElementById('ty').addEventListener('click', selectTy);

function selectTy() {
    // clear frame from any previously selected characters
    clearCharacterSelection();
    // add frame to selected character for visual confirmation of selection
    document.getElementById('ty').style.border = '2px solid white';
    // cue audio file for character
    likeYouBetty.play();
    // volumne set above theme music level
    likeYouBetty.volume = .8;    
    characterSelected = 0;
}

// event listener for Lacey
document.getElementById('lacey').addEventListener('click', selectLacey);

function selectLacey() {
    clearCharacterSelection();
    document.getElementById('lacey').style.border = '2px solid white';
    youTakeDrugsDanny.play();
    youTakeDrugsDanny.volume = .8;    
    characterSelected = 1;
}

// event listener for Maggie
document.getElementById('maggie').addEventListener('click', selectMaggie);

function selectMaggie() {
    clearCharacterSelection();
    document.getElementById('maggie').style.border = '2px solid white';
    thanksForNothing.play();
    thanksForNothing.volume = .8;
    characterSelected = 2;
}

// event listener for Al
document.getElementById('al').addEventListener('click', selectAl);

function selectAl() {
    clearCharacterSelection();
    document.getElementById('al').style.border = '2px solid white';
    hat.play();
    hat.volume = .8;
    characterSelected = 3;
}

// event listener for Judge
document.getElementById('judge').addEventListener('click', selectJudge);

function selectJudge() {
    clearCharacterSelection();
    document.getElementById('judge').style.border = '2px solid white';
    areYouMyPal.play();
    areYouMyPal.volume = .8;
    characterSelected = 4;
}

// event listener for Carl
document.getElementById('carl').addEventListener('click', selectCarl);

function selectCarl() {
    clearCharacterSelection();
    document.getElementById('carl').style.border = '2px solid white';
    gungaShort.play();
    gungaShort.volume = .8;
    characterSelected = 5;
}

// event listener for Mrs. Smails
document.getElementById('mrssmails').addEventListener('click', selectMrsSmails);

function selectMrsSmails() {
    clearCharacterSelection();
    document.getElementById('mrssmails').style.border = '2px solid white';
    thankYouVeryLittle.play();
    thankYouVeryLittle.volume = .8;
    characterSelected = 6;
}

// event listener for Danny
document.getElementById('danny').addEventListener('click', selectDanny);

function selectDanny() {
    clearCharacterSelection();
    document.getElementById('danny').style.border = '2px solid white';
    beTheBall.play();
    beTheBall.volume = .8;
    characterSelected = 7;
}

// initialize player name variable
let playerName = "";

// listen for "play the game" click
document.getElementById('begin').addEventListener('click', initializeGame);

function initializeGame() {
    if(characterSelected === null) {
        // alert noise
        nanaShort.play();
        nanaShort.volume = 1;
        // error message if no character selected
        alert("Must select a character to continue!");
    } else if(document.querySelector('input').value === "") {
        // alert noise
        nanaShort.play();
        nanaShort.volume = 1;
        // error message if name left blank
        alert("Must enter player name to continue!");
    } else { 
        // play "kill all the golfers/gophers" dialogue
        killGophers.play();
        killGophers.volume = .8;
        // set value of player name variable
        playerName = document.querySelector('input').value;
        // player name to title on game screen
        document.getElementById('player-name-scoreboard').innerText = playerName;
        // style transition page 2 --> page 3
        screenStyleTransitionTwoThree()
    }
}

// style transition, hide, unhide elements
function screenStyleTransitionTwoThree() {
    // hide all screen 2 elements
    document.getElementById('screen-2').style.display = 'none';   





    document.getElementById('screen-3').style.display = 'grid';   



    document.getElementById('player-picture').style.display = 'block';
    document.getElementById('player-box').style.display = 'grid';



    document.getElementById('gopher-picture').style.display = 'block';
    document.getElementById('gopher-box').style.display = 'grid';



    // display player score box
    // document.getElementById('player-box').style.display = 'block';
    // // display gopher score box
    // document.getElementById('gopher-box').style.display = 'block';
    // // display game field
    // document.getElementById('game-box').style.display = 'grid';
    // // display time remaining bar
    // document.getElementById('time-remaining-bar').style.display = 'inline';   
    // // display game controls
    // document.getElementById('game-controls').style.display = 'inline';   


    document.getElementById('game-box').addEventListener('hover', hammerCursor);





    playerNameToScoreboard (playerName);


    document.getElementById('player-picture').src = character[characterSelected].photoUrl;


}




function hammerCursor (){
document.getElementById('game-box').style.cursor = 'imgs/hammercursor.png';
}






////////// screen 3 //////////








// define game board variables 
let playerScore = 0;
let gopherScore = 0;
let gameDifficulty = 0;
let gameActive = false;
let gameOver = false;
let timeRemaining = 60;

// let results = [];

// previously defined:
// let playerName
// const character






// display player name on game screen

function playerNameToScoreboard (){
    document.getElementById('player-name-scoreboard').innerText = playerName;
    document.getElementById('player-name-scoreboard-as').innerText = `${character[characterSelected].name}`
}

const difficultyOptions = ['slow poke', `lil' less embarrassing`, 'Speedy McClickerson', 'ludicrouse', 'plaid']


// const gameDifficulty = 1;


// event listener and function to set gameDifficulty
document.getElementById('difficulty-input').addEventListener('click', updateDifficulty)


function updateDifficulty (){
    gameDifficulty = document.getElementById('difficulty-input').value
    document.getElementById('difficulty-selected').innerText = difficultyOptions[gameDifficulty];
}


// difficulty settings

let difficultySettings = [
    {timeBetweenMin: '2000', timeBetweenMax: '4000', timeUpMin: "1000", timeUpMax: "2000"},
    {timeBetweenMin: '1500', timeBetweenMax: '3000', timeUpMin: "750", timeUpMax: "1500"},
    {timeBetweenMin: '1000', timeBetweenMax: '2000', timeUpMin: "500", timeUpMax: "1000"},
    {timeBetweenMin: '500', timeBetweenMax: '1000', timeUpMin: "250", timeUpMax: "500"},
    {timeBetweenMin: '250', timeBetweenMax: '500', timeUpMin: "125", timeUpMax: "250"},
 ]




// get gopher to display

// .....




// event listener to begin game
document.getElementById('start-game').addEventListener('click', start)

// begin game
function start (){
    // zero out scores
    playerScore = 0;
    document.getElementById('player-score').innerText = playerScore; 
    gopherScore = 0;
    document.getElementById('gopher-score').innerText = gopherScore; 
    // reset game (for replays)
    gameOver = false;

    // stop kill gophers audio
    killGophers.pause();

    // turn up background music (on delay)
    setTimeout(function(){ 
        welcome.volume = 0.8;
    }, 2000);

    // play freeze gopher
    freezeGopher.play();
    freezeGopher.volume = .8;

    // small delay before game actually begins
    setTimeout(function(){ 
        gameActive = true;
        timeRemaining = 60;
        startTimer()
        displayGopher()
    }, 2500);
}





// timer functionality
let timer;

function startTimer() {
    // process recuction every 1000ms
    timer = setInterval(reduceTime, 1000);
}

// reduce time remaining and update header
function reduceTime(){
    if (timeRemaining > 0) {
        timeRemaining = timeRemaining - 1;
        document.getElementById('time-remaining-value').innerText = timeRemaining;
        console.log("time reduced by 1 second")
    } else {
        clearInterval(timer);
        document.getElementById('time-remaining-value').innerText = 0;
        gameOver = true;
//         displayResults()
    }
}



// gopher hit
function gopherHit (){
    // increase player points
    playerScore = playerScore + 1
    // stop prior punch and play new punch sound
    punch.pause();
    punch.currentTime = 0;
    punch.play();
    punch.volume = .6;
    // update scoreboard
    document.getElementById('player-score').innerText = playerScore; 
}


// golfer hit
function golferHit (){
    // point penalty
    playerScore = playerScore - 10
    // sound for golfer hit
    nanaShort.play();
    nanaShort.volume = 1;
    // update scoreboard
    document.getElementById('player-score').innerText = playerScore; 
}






const gophers = document.querySelectorAll('.gopher');

// const playerNameEl = document.getElementById('player-name-scoreboard');





// randomly generate a hole
const holes = document.querySelectorAll('.hole');

// to prevent duplicate hole selection
let previousHole = null;

function randomHole (holes){
    const i = Math.floor(Math.random() * holes.length);
    const hole = holes[i];
    if(hole === previousHole) {
        return randomHole(holes);
    }
    previousHole = hole;
    return hole;
}

// randomly generate time up based on difficulty settings
function timeUp (){
    let minUp = difficultySettings[gameDifficulty].timeUpMin
    let maxUp = difficultySettings[gameDifficulty].timeUpMax
    return Math.round(Math.random() * (maxUp - minUp) + minUp);
}

// randomly generate time between based on difficulty settings
function timeBetween (){
    let minBetween = difficultySettings[gameDifficulty].timeBetweenMin
    let maxBetween = difficultySettings[gameDifficulty].timeBetweenMax
    return Math.round(Math.random() * (maxBetween - minBetween) + minBetween);
}

// display gopher
function displayGopher() {
    let timeDisplayed = timeUp();
    let hole = randomHole(holes);
    hole.classList.add('displayed');
    setTimeout(() => {
        hole.classList.remove('displayed');
            if(!gameOver) {
                displayGopher();
            };
    }, timeDisplayed);
}

// event listener for gopher whacks
gophers.forEach(gopher => gopher.addEventListener('click', gopherHit));



