var timer = 60;
var score = 0;
var hitRanVal;
function increseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}
function makeBubble(){
var clutter = "";

for(var i =0; i<=101; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;

}
document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

function timerInt(){
        var timerInt = setInterval(function(){
            if(timer>0){
                timer--;
                document.querySelector("#timerval").innerText = timer;

            }else{
                document.querySelector("#pbtm").innerHTML = `<h1>Game Over Your Score is ${score}</h1>`
                clearInterval(timerInt);
            }
    
        },1000)
    
}
timerInt();

function getNewHit(){
    hitRanVal = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitRanVal;

}
document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickedVal = Number(details.target.textContent);
    if(clickedVal===hitRanVal){
        increseScore();
        makeBubble();
        getNewHit(); 
    }
})
getNewHit();

