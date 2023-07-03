var ran = Math.floor(Math.random()*6) + 1;
var ranDiceImage = "images/dice"+ran+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",ranDiceImage);

var ran2 = Math.floor(Math.random()*6) + 1;
var ranDiceImage2 = "images/dice"+ran2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",ranDiceImage2);

if(ran>ran2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}else if(ran<ran2){
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}else{
    document.querySelector("h1").innerHTML = "🏳️Draw🏳️";
}