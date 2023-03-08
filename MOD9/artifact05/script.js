var myImages = ["images/box01.png", "images/box02.png","images/box03.png"];
var captionImages =["Start","02","03","04","05"];

function myImages() {
    document.getElementById("slideshow") = myImages[0];
}

function updateImage() {
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt = captionImages[index];
} 

function next(index) {
    if (myImages.length == index + 1)
    index = 0;
    else 
    index++;
    updateImage();
}

function back(){
    if (index===0)
    index=myImages.length-1;
    else
    index--;
    
    updateImage();
   } 
   
   var nextButton = document.getElementById("next"); 
   var previousButton = document.getElementById("previous"); 
   
   previousButton.addEventListener("click",back,false);
   nextButton.addEventListener("click",next,false); 