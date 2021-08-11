var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 +".png";
var randomimageSource ="images/" + randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomimageSource2 = "images/dice" + randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "The Player 1 won.";
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Try again.";
}else{
    document.querySelector("h1").innerHTML = "The Player 2 won.";
}