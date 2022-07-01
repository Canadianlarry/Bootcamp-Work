///////////////////////////////Player 1//////////////////////////

var randomNumber1=Math.floor(Math.random() * 6)+1;//1-6
var randomDiceImage="dice"+randomNumber1+".png"; //dice1.png-dice6.png
var randomImageSource ="images/"+randomDiceImage; //images/dice1.png-images.dice.6png

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

//Array JS 

// var animals=["giraffe","elephant","lion"];
// //indexed

// var animals[0];
// var elephant[1];


///////////////////////////////Player 2//////////////////////////

var randomNumber2=Math.floor(Math.random() * 6)+1;//1-6
var randomDiceImage2="dice"+randomNumber2+".png"; //dice1.png-dice6.png
var randomImageSource2 ="images/"+randomDiceImage2; //images/dice1.png-images.dice.6png

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);


/////// Condition//////
//if player 1 wins

if (randomNumber1>randomNumber2){

document.querySelector("h1").innerHTML="🚩 Player 1 Wins!!! Dance";

}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="🚩 Player 2 Wins!!! Sad :-(";
}
else{
    document.querySelector("h1").innerHTML="🚩 Draw";
}

