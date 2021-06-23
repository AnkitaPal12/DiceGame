var randomNumber1= Math.floor(Math.random()*6)+1; // a number b/w 1-6

var randomDiceImage= "dice"+randomNumber1+".png"; //selecting an img randomly from dice1.png-dice6.png

var image1= document.querySelectorAll("img")[0]; //get all elements of the class img from position 0

image1.setAttribute("src",randomDiceImage); //change src class to randomDiceImsge


var randomNumber2= Math.floor(Math.random()*6)+1;

var randomDiceImages= "dice"+randomNumber2+".png";

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src",randomDiceImages);

//IF PLAYER 1 WINS

if(randomNumber1>randomNumber2)
{
	document.querySelector("h1").innerHTML= "Player1 wins !"; //change the h1 tag
}
else if(randomNumber2 > randomNumber1)
{
	document.querySelector("h1").innerHTML= "Player2 wins !"; //change the h1 tag
}
else{
	document.querySelector("h1").innerHTML= "Draw !"; //change the h1 tag
}