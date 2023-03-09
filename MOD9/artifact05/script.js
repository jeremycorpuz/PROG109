var myImages = ["images/box01.png", "images/box02.png","images/box03.png","images/box04.png","images/box05.png","images/box06.png","images/box07.png", "images/box08.png", "images/box09.png", "images/box10.png"];

var captionImages =["Start 01","02","03","04","05","06","07", "08", "09", "Fin. 10"];

var index = 0; 

function updateImage(){
    document.getElementById("slideshow").src = myImages[index];
    document.getElementById("slideshow").alt= captionImages[index];
    document.getElementById("caption").textContent = captionImages[index]; 
    } 

function next(){
    if (myImages.length == index + 1) {
        index = 0;
        updateImage();
    }
    else {
        index++;
        updateImage();
    }
}

function back(){
    if (index == 0) {
        index = myImages.length - 1;
        updateImage();
    }
    else {
        index--;
        updateImage();
    }
}
   
var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 
   
previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false); 

function autoSlide(){
    if (document.getElementById("auto").checked)
    next(); 
    }

setInterval(autoSlide, 3000); 