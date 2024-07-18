let homeScoreBtnOne= document.getElementById("home-score-btn-1")
let homeScoreBtnTwo= document.getElementById("home-score-btn-2")
let homeScoreBtnThree= document.getElementById("home-score-btn-3")
let homeStoreEl= document.getElementById("home-score")
let homeScore=0

function increaseHomeScoreOne(){
    homeScore=homeScore+1
    homeStoreEl.textContent= homeScore
}
function increaseHomeScoreTwo(){
    homeScore=homeScore+2
    homeStoreEl.textContent= homeScore
}
function increaseHomeScoreThree(){
    homeScore=homeScore+3
    homeStoreEl.textContent= homeScore
}

let guestScore=0
let guestScoreBtnOne= document.getElementById("guest-score-btn-1")  
let guestScoreBtnTwo= document.getElementById("guest-score-btn-2") 
let guestScoreBtnThree= document.getElementById("guest-score-btn-3") 
let updateScoreEl= document.getElementById("guest-score")


function increaseGuest1 (){
    guestScore=guestScore+1
    updateScoreEl.textContent = guestScore
}
function increaseGuest2 (){
    guestScore=guestScore+2
    updateScoreEl.textContent = guestScore
}
function increaseGuest3 (){
    guestScore=guestScore+3
    updateScoreEl.textContent = guestScore
}
function resetScores() {
    homeScore = 0
    guestScore = 0
    foulsNumber=0
    foulsScore=0
    periodScore=0
    homeStoreEl.textContent = homeScore
    updateScoreEl.textContent = guestScore
    increaseFoulsEl.textContent=foulsNumber
    updateFoulsEl.textContent=foulsScore
    periodStoreEl.textContent=periodScore
}
let foulsScore=0
let updateFoulsEl= document.getElementById("fouls-score")
function increaseFouls(){
    foulsScore+=1
    updateFoulsEl.textContent=foulsScore
}
let increaseFoulsEl= document.getElementById("fouls-nbr")
let foulsNumber=0
function incrementFouls(){
    foulsNumber+=1
    increaseFoulsEl.textContent=foulsNumber
}
let periodIncreaseBtn= document.getElementById("period-btn")
let periodScore=0
let periodStoreEl= document.getElementById("period-score")
function increasePeriod(){
    periodScore+=1
    periodStoreEl.textContent=periodScore
}