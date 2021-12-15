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
    document.removeEventListener('click', musicWelcome);
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
    freezeGopher.pause();
    freezeGopher.currentTime = 0;
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
    freezeGopher.play();
    freezeGopher.volume = .8;    
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
let playerName = null;

// listen for "play the game" click
document.getElementById('begin').addEventListener('click', initializeGame);

function initializeGame() {
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
let gameDifficulty = 1;
const gameActive = false;
const gameConcluded = false;
const timeRemaining = 60;

const results = [];

// previously defined:
// let playerName
// const character



// ?? it would be cool to have an aviation click knob like on a 1073


const holesEl = document.querySelectorAll('.hole');

const gophersEl = document.querySelectorAll('.gopher');

const playerNameEl = document.getElementById('player-name-scoreboard');


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






// get gopher to display




// begin game
function start (){




    // let playerScore = 0;
    // let gopherScore = 0;
    // let gameDifficulty = 1;
    // const gameActive = false;
    // const gameConcluded = false;
    // const timeRemaining = 60;






}






// gopher hit

function gopherHit (){
    // increase player points
    playerScore = playerScore + 1

    // hould find an audio file to add also...
    // ..........

    // update scoreboard
    document.getElementById('player-score').innerText = playerScore; 
}








// golfer hit

function golferHit (){
    // point penalty
    playerScore = playerScore - 10

    //should find an audio file to add also...
    // ..........

    // update scoreboard
    document.getElementById('player-score').innerText = playerScore; 
}










// example

// const holes = document.querySelectorAll(".hole");
//   const length = holes.length;

//   var interval = setInterval(() => {
//     //Generate a random number
//     const random = Math.floor(Math.random() * length);
    
//     //Remove the active class from every ground
//     holes.forEach((e) => {
//       e.classList.remove("active");
//     });
    
//     //Add the active class to random ground
//     holes[random].classList.add("active");
//   }, 700);

// ^ example






// countdown timer




///// timer example


// let timeRemaining = 60;

// let countdownTimer = setInterval(function() {
//     if(timeRemaining <= 0) {
//         clearInterval(countdownTimer);
//     }
//     document.getElementById("timer-display").value = 60 - timeRemaining;
//     timeRemaining -= 1;
// }, 1000);









///// timer example end









// const carlSpacklerPoints = {}

// const gopherPoints = {}



// function whackGopher () {}

// function whackGolfer () {}















