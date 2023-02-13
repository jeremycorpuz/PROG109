var k = pHeight;

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
    upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
    upRight(pHeight, pColorEven, pColorOdd, pSymbol);
    downRight(pHeight, pColorEven, pColorOdd, pSymbol);
}
// Left side of Rhombus
function upLeft (pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine= ""; 
    for (i = 1; i <= pHeight; i ++) {
        for (k = pHeight; k > i; k--) {
            rLine += "<span style='color: #FFFFFF;'>" + pSymbol + "</span>"; ;
        }
        for (j = 0; j < i; j ++) {
            if (j%2)
            //even
            rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
            //odd
            rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>"; 
        }
        rLine += "<p>";
    }
    document.getElementById('upLeft').innerHTML = rLine;
}

function downLeft (pHeight, pColorEven, pColorOdd, pSymbol) {
    var rLine = "";
    for (i = 0; i < pHeight; i++) {
        for (j = 0; j < i; j++) {
            rLine += "<span style='color: #FFFFFF;'>" + pSymbol + "</span>"; ;
        }
        for (j = pHeight; j > i; j--) {
            if (j%2)
            //even
            rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
            //odd
            rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
        rLine += "<p>";
    }
    document.getElementById('downLeft').innerHTML = rLine;
}

// Right side of Rhombus 
function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine ="";
    for (i=0; i<pHeight; i++) {
        for(j=0; j<=i; j++) {
            if (j%2)
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol + "</span>";
            else
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol + "</span>";
        }
    rLine +="<p>";
    }
    document.getElementById("upRight").innerHTML = rLine;
}
    
function downRight(pHeight, pColorEven, pColorOdd, pSymbol){
    var rLine = "";
    for (i=pHeight;i > 0;i--){
        for (j=0;j<i;j++){
            if (j%2)
                rLine += "<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
            else
                rLine += "<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
        }
    rLine += "<p>";
    }
    document.getElementById("downRight").innerHTML = rLine;
}

       
