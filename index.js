const scorecard = document.querySelector('.scorecard');
const startButton = document.querySelector('.startbutton');
console.log(innerWidth, innerHeight);
var spot2=document.getElementById('container');
var xran= Math.floor(Math.random()*innerHeight*0.75);
var yran= Math.floor(Math.random()*innerHeight*0.75);
var spot2=document.getElementById('container');
var spot= document.getElementById('spot');
spot.style.position = "absolute";
spot.style.marginLeft = `${xran}px`;
spot.style.marginTop = `${yran}px`;
var score=0;
var arr=[];
spot.classList.add('hidden');
scorecard.classList.add('hidden');
function startGame(){
    spot.classList.remove('hidden');
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
    scorecard.classList.remove('hidden');
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

spot.addEventListener('click', event => {
  const  {spot}  = event.target.dataset;

  console.log(spot);

    score+=10;

  
  
  nxtRnd();

});

