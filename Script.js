let timer=0;
let newHitValue = 0;
let scoreCount=0;
onload();

function onload(){
    startingFunction();
}
function mainFunction(){
    loadBubble();
    timerFunction();
    getNewHit();
    eventBubbling();
}

function startingFunction(){
    document.querySelector("#timerValueBtn").addEventListener("click",()=>{
        let timerVal = parseInt(document.querySelector("#timerValue").value);
        if(timerVal<=0 || timerVal>10){
            alert("Please enter the valid timer value.");
        }
        timer = timerVal*60;
        document.querySelector(".pbottom").innerHTML=" ";
        mainFunction();
    })
}
function loadBubble(){
    let bottomPannel = document.querySelector(".pbottom");
    let clutter="";
    for(let i=1;i<161;i++){
        let rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    bottomPannel.innerHTML = clutter;
}


function timerFunction(){
    let timmerVal = setInterval(()=>{
        if(timer>0){
            timer--;
            document.querySelector("#Timer").textContent=timer;
        }
        else{
            document.querySelector(".pbottom").innerHTML=" ";
            document.querySelector(".pbottom").innerHTML="<h1>Game Over</h1><button class='Btn' onclick='resetFunction()'>Reset</button>";
            clearInterval(timmerVal);
        }
    },1000)
}

function getNewHit(){
    newHitValue= Math.floor(Math.random()*10);
    document.querySelector("#Hit").textContent=newHitValue;
}

function setScore(){
    scoreCount += 10;
    document.querySelector("#Score").textContent = scoreCount;
}

function eventBubbling(){
    document.querySelector(".pbottom").addEventListener("click",(details)=>{
        let selectedBubble = parseInt(details.target.textContent);
        console.log(typeof selectedBubble);
        if(newHitValue == selectedBubble){
            setScore();
            loadBubble();
            getNewHit();
        }
    })
}

function resetFunction(){
    window.location.reload();
}