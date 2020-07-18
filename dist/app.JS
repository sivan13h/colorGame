var Colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var message = document.getElementById("message");
var newColors = document.getElementById("new");
var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");
var hardModeSquares = document.getElementById("hardModeSquares");
var header = document.getElementById("header");
var playAgain = document.getElementById("playAgain")

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor =  Colors[i]

    squares[i].addEventListener("click", function(){
        console.log(this.style.backgroundColor)
        if(this.style.backgroundColor.toUpperCase() === pickedColor){
            for(var i = 0; i<squares.length; i++){
            squares[i].style.backgroundColor = pickedColor.toLowerCase()
            }
            message.textContent = "Well done!"
            playAgain.textContent = "PLAY AGAIN"
            header.style.backgroundColor = pickedColor
        } else {
                this.style.backgroundColor = "#232323"
                message.textContent = "Try again!"
            }
    });
};

// NEW COLORS ===========================================
newColors.addEventListener("click", function(){
    message.textContent = ""
    playAgain.textContent = "NEW COLORS"
    header.style.backgroundColor = "#4682b4"
    if(Colors.length === 6){
        Colors = generateRandomColors(6)
        pickedColor = pickColor()
        colorDisplay.textContent = pickedColor
        for(var i = 0; i < Colors.length; i++){
            squares[i].style.backgroundColor =  Colors[i]
        }
    } else {
        Colors = generateRandomColors(3)
        pickedColor = pickColor()
        colorDisplay.textContent = pickedColor
        for(var i = 0; i < Colors.length; i++){
            squares[i].style.backgroundColor =  Colors[i]
        }

    }
});

// EASY MODE =============================================
easyButton.addEventListener("click", function(){
    this.classList.add("selected")
    hardButton.classList.remove("selected")
    Colors = generateRandomColors(3);
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for(var i = 0; i < Colors.length; i++){
        squares[i].style.backgroundColor =  Colors[i]
        hardModeSquares.style.display = "none"
    } 
});

// HARD MODE =============================================
hardButton.addEventListener("click", function(){
    this.classList.add("selected")
    easyButton.classList.remove("selected")
    Colors = generateRandomColors(6);
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for(var i = 0; i < Colors.length; i++){
        squares[i].style.backgroundColor =  Colors[i]
        hardModeSquares.style.display = "block"
    } 
});








function generateRandomColors(num){
    var arr = [];

    for(var i = 0; i < num; i++){
    arr.push(randomColor())
    }
    return arr
}

function randomColor(){
    return ("RGB(" + 
    Math.floor(Math.random() * 256) + ", " + 
    Math.floor(Math.random() * 256) + ", " + 
    Math.floor(Math.random() * 256) + ")")
}

function pickColor(){
 var random = Math.floor(Math.random() * Colors.length)
 return Colors[random]
}

