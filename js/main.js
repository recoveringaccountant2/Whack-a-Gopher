////////// audio //////////

// probably won't use all of these.  anything I could find on a sound board.  

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

const character = ['Ty Webb', 'Lacey Underall', `Maggie O'Hooligan`, 'Al Czervik', 'Judge Elihu Smails', 'Carl Spackler', 'Mrs. Smails', 'Danny Noonan'];

// create empty element to hold character selected

let characterSelected = null

// event listener for Ty
document.getElementById('ty').addEventListener('click', selectTy);

function selectTy() {
    // clear frame from any previously selected characters
    document.getElementById('ty').style.border = '0px solid white';
    document.getElementById('lacey').style.border = '0px solid white';
    document.getElementById('maggie').style.border = '0px solid white';
    document.getElementById('al').style.border = '0px solid white';
    document.getElementById('judge').style.border = '0px solid white';
    document.getElementById('carl').style.border = '0px solid white';
    document.getElementById('mrssmails').style.border = '0px solid white';
    document.getElementById('danny').style.border = '0px solid white';

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
    document.getElementById('ty').style.border = '0px solid white';
    document.getElementById('lacey').style.border = '0px solid white';
    document.getElementById('maggie').style.border = '0px solid white';
    document.getElementById('al').style.border = '0px solid white';
    document.getElementById('judge').style.border = '0px solid white';
    document.getElementById('carl').style.border = '0px solid white';
    document.getElementById('mrssmails').style.border = '0px solid white';
    document.getElementById('danny').style.border = '0px solid white';

    document.getElementById('lacey').style.border = '2px solid white';

    freezeGopher.play();
    freezeGopher.volume = .8;    

    characterSelected = 1;
}

// event listener for Maggie
document.getElementById('maggie').addEventListener('click', selectMaggie);

function selectMaggie() {
    document.getElementById('ty').style.border = '0px solid white';
    document.getElementById('lacey').style.border = '0px solid white';
    document.getElementById('maggie').style.border = '0px solid white';
    document.getElementById('al').style.border = '0px solid white';
    document.getElementById('judge').style.border = '0px solid white';
    document.getElementById('carl').style.border = '0px solid white';
    document.getElementById('mrssmails').style.border = '0px solid white';
    document.getElementById('danny').style.border = '0px solid white';

    document.getElementById('maggie').style.border = '2px solid white';

    thanksForNothing.play();
    thanksForNothing.volume = .8;

    characterSelected = 2;
}

// event listener for Al
document.getElementById('al').addEventListener('click', selectAl);

function selectAl() {
    document.getElementById('ty').style.border = '0px solid white';
    document.getElementById('lacey').style.border = '0px solid white';
    document.getElementById('maggie').style.border = '0px solid white';
    document.getElementById('al').style.border = '0px solid white';
    document.getElementById('judge').style.border = '0px solid white';
    document.getElementById('carl').style.border = '0px solid white';
    document.getElementById('mrssmails').style.border = '0px solid white';
    document.getElementById('danny').style.border = '0px solid white';

    document.getElementById('al').style.border = '2px solid white';

    hat.play();
    hat.volume = .8;

    characterSelected = 3;
}

// event listener for Judge
document.getElementById('judge').addEventListener('click', selectJudge);

function selectJudge() {
    document.getElementById('ty').style.border = '0px solid white';
    document.getElementById('lacey').style.border = '0px solid white';
    document.getElementById('maggie').style.border = '0px solid white';
    document.getElementById('al').style.border = '0px solid white';
    document.getElementById('judge').style.border = '0px solid white';
    document.getElementById('carl').style.border = '0px solid white';
    document.getElementById('mrssmails').style.border = '0px solid white';
    document.getElementById('danny').style.border = '0px solid white';

    document.getElementById('judge').style.border = '2px solid white';

    areYouMyPal.play();
    areYouMyPal.volume = .8;

    characterSelected = 4;
}

// event listener for Carl
document.getElementById('carl').addEventListener('click', selectCarl);

function selectCarl() {
    document.getElementById('ty').style.border = '0px solid white';
    document.getElementById('lacey').style.border = '0px solid white';
    document.getElementById('maggie').style.border = '0px solid white';
    document.getElementById('al').style.border = '0px solid white';
    document.getElementById('judge').style.border = '0px solid white';
    document.getElementById('carl').style.border = '0px solid white';
    document.getElementById('mrssmails').style.border = '0px solid white';
    document.getElementById('danny').style.border = '0px solid white';

    document.getElementById('carl').style.border = '2px solid white';

    gungaShort.play();
    gungaShort.volume = .8;

    characterSelected = 5;
}

// event listener for Mrs. Smails
document.getElementById('mrssmails').addEventListener('click', selectMrsSmails);

function selectMrsSmails() {
    document.getElementById('ty').style.border = '0px solid white';
    document.getElementById('lacey').style.border = '0px solid white';
    document.getElementById('maggie').style.border = '0px solid white';
    document.getElementById('al').style.border = '0px solid white';
    document.getElementById('judge').style.border = '0px solid white';
    document.getElementById('carl').style.border = '0px solid white';
    document.getElementById('mrssmails').style.border = '0px solid white';
    document.getElementById('danny').style.border = '0px solid white';

    document.getElementById('mrssmails').style.border = '2px solid white';

    thankYouVeryLittle.play();
    thankYouVeryLittle.volume = .8;

    characterSelected = 6;
}

// event listener for Danny
document.getElementById('danny').addEventListener('click', selectDanny);

function selectDanny() {
    document.getElementById('ty').style.border = '0px solid white';
    document.getElementById('lacey').style.border = '0px solid white';
    document.getElementById('maggie').style.border = '0px solid white';
    document.getElementById('al').style.border = '0px solid white';
    document.getElementById('judge').style.border = '0px solid white';
    document.getElementById('carl').style.border = '0px solid white';
    document.getElementById('mrssmails').style.border = '0px solid white';
    document.getElementById('danny').style.border = '0px solid white';

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
    // set player name variable
    playerName = document.querySelector('input').value;
    // style transition page 2 --> page 3
    screenStyleTransitionTwoThree()

}

// style transition, hide, unhide elements
function screenStyleTransitionTwoThree() {
    // hide all screen 2 elements
    document.getElementById('screen-2').style.display = 'none';   





    document.getElementById('screen-3').style.display = 'grid';   



    document.getElementById('player-picture').style.display = 'inline-block';
    document.getElementById('player-box').style.display = 'grid';



    document.getElementById('gopher-picture').style.display = 'inline-block';
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

}
    













////////// screen 3 //////////










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









const carlSpacklerPoints = {}

const gopherPoints = {}



function whackGopher () {}

function whackGolfer () {}











////////// ___ //////////






////////// ___ //////////












