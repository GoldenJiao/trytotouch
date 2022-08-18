const scorecard = document.querySelector('.gameover');
const startButton = document.querySelector('.startbutton');
const playagain = document.querySelector('.playagain');
const info = document.querySelector('.info');
console.log(innerWidth, innerHeight);
var spot2=document.getElementById('container');
var xran= Math.floor(Math.random()*innerHeight*0.75);
var yran= Math.floor(Math.random()*innerHeight*0.75);
var spot2=document.getElementById('container');
var spot= document.getElementById('spot');
var kick=new Audio("sounds/kick-bass.mp3");
var gstart=new Audio("sounds/start.mp3");
var gs=new Audio("sounds/game-over-arcade-6435.mp3");
spot.style.position = "absolute";
spot.style.marginLeft = `${xran}px`;
spot.style.marginTop = `${yran}px`;
var score=0;
var arr=[];
spot.classList.add('hidden');
scorecard.classList.add('hidden');
spot2.classList.add('hidden');

function startGame(){
  gstart.play();
  info.classList.add('hidden');
    spot.classList.remove('hidden');
    spot2.classList.remove('hidden');
    scorecard.classList.add('hidden');
    startButton.classList.add('hidden');
    
  
    nxtRnd();
    return;
}

function nxtRnd(){
    xran= Math.floor(Math.random()*innerHeight*0.75);
    yran= Math.floor(Math.random()*innerHeight*0.75);
    spot.style.marginLeft = `${xran}px`;
    console.log(spot.style.marginLeft);
    spot.style.marginTop = `${yran}px`;
    return;

}

function gameover(){
    
    saveLeadBoard(score);
    document.getElementById('L1').innerHTML = getLeaderBoard()[0];
    document.getElementById('L2').innerHTML = getLeaderBoard()[1];
    document.getElementById('L3').innerHTML = getLeaderBoard()[2];
    document.getElementById('L4').innerHTML = getLeaderBoard()[3];
    console.log(document.getElementById('L1').innerHTML);
    spot.classList.add('hidden');
    spot2.classList.add('hidden');
    scorecard.classList.remove('hidden');
}

function nxtgame(){

    location.reload();

  }

function saveLeadBoard(new_score){
    let scores = getLeaderBoard();
  
    scores.sort(function(a, b){return a-b});
  
    if (scores.length == 4){
    for (let i=0; i<scores.length; i++){
      if (scores[i]<new_score){
        scores[i] = new_score;
        break;
      }
    }
  }
    else if (!(new_score in scores)){
      scores.push(new_score);
    }
    scores.sort(function(a, b){return a-b});
  
    localStorage.setItem("leaderboard", JSON.stringify(scores));
  }
  
  function getLeaderBoard(){
    arr = JSON.parse(localStorage.getItem("leaderboard"))
    if (arr ==  null){
      return [0,0,0,0];
    }
    return arr.sort(function(a, b){return b-a});
  }


startButton.addEventListener('click', startGame);

var timeout;

spot.addEventListener('click', event => {
  clearTimeout(timeout);
  
    kick.play();
  const  {spot}  = event.target.dataset;

  console.log(spot);

    score+=10;
    timeout = setTimeout(() => {
      gs.play();
      gameover();
      console.log('gameover');
    }, 3000);
  

  
  
  nxtRnd();

});


playagain.addEventListener('click', nxtgame);
