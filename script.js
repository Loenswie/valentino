var canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");
var stars = 500;
var colorrange = [0, 60, 240];
var starArray = [];

const button = document.getElementById("valentinesButton");
if (button) {
    button.style.display = "none";
    button.style.opacity = 0;
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (var i = 0; i < stars; i++) {
    var x = Math.random() * canvas.offsetWidth;
    var y = Math.random() * canvas.offsetHeight;
    var radius = Math.random() * 1.2;
    var hue = colorrange[getRandom(0, colorrange.length - 1)];
    var sat = getRandom(50, 100);
    var opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

var frameNumber = 0;
var opacity = 0;
var secondOpacity = 0;
var thirdOpacity = 0;
var buttonOpacity = 0;

var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

function drawStars() {
    for (var i = 0; i < stars; i++) {
        var star = starArray[i];
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
        context.fill();
    }
}

function updateStars() {
    for (var i = 0; i < stars; i++) {
        if (Math.random() > 0.99) {
            starArray[i].opacity = Math.random();
        }
    }
}

function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24);
    var lineHeight = 8;

    context.font = fontSize + "px Comic Sans MS";
    context.textAlign = "center";
    context.shadowColor = "rgba(255, 182, 193, 1)";
    context.shadowBlur = 10;

    if(frameNumber < 120){
        context.fillStyle = `rgba(255, 182, 193, ${opacity})`;
        context.fillText("HI MEID! Elke dag wordt ik geblessed met jou", canvas.width/2, canvas.height/2);
        opacity += 0.02;
    }
    if(frameNumber >= 120 && frameNumber < 240){
        context.fillStyle = `rgba(255, 182, 193, ${opacity})`;
        context.fillText("HI MEID! Elke dag wordt ik geblessed met jou", canvas.width/2, canvas.height/2);
        opacity -= 0.02;
    }

    if(frameNumber == 240) opacity = 0;

    if(frameNumber > 240 && frameNumber < 360){
        context.fillStyle = `rgba(255, 182, 193, ${opacity})`;
        context.fillText("Tussen een miljard sterren en miljoenen jaren", canvas.width/2, canvas.height/2);
        opacity += 0.02;
    }

    if(frameNumber >= 360 && frameNumber < 480){
        context.fillStyle = `rgba(255, 182, 193, ${opacity})`;
        context.fillText("Tussen een miljard sterren en miljoenen jaren", canvas.width/2, canvas.height/2);
        opacity -= 0.02;
    }

    if(frameNumber == 480) opacity = 0;

    if(frameNumber > 480 && frameNumber < 600){
        context.fillStyle = `rgba(255, 182, 193, ${opacity})`;
        context.fillText("Om precies op dit moment samen met jou te zijn", canvas.width/2, canvas.height/2);
        opacity += 0.02;
    }

    if(frameNumber >= 600 && frameNumber < 720){
        context.fillStyle = `rgba(255, 182, 193, ${opacity})`;
        context.fillText("Om precies op dit moment samen met jou te zijn", canvas.width/2, canvas.height/2);
        opacity -= 0.02;
    }

    if(frameNumber == 720) opacity = 0;

    if(frameNumber > 720 && frameNumber < 840){
        context.fillStyle = `rgba(255, 182, 193, ${opacity})`;
        context.fillText("is zo geweldig en lucky dat ik je heb", canvas.width/2, canvas.height/2);
        opacity += 0.02;
    }

    if(frameNumber >= 840 && frameNumber < 960){
        context.fillStyle = `rgba(255, 182, 193, ${opacity})`;
        context.fillText("is zo geweldig en lucky dat ik je heb", canvas.width/2, canvas.height/2);
        opacity -= 0.02;
    }

    if(frameNumber == 960) opacity = 0;

    if(frameNumber > 960 && frameNumber < 1080){
        context.fillStyle = `rgba(255, 182, 193, ${opacity})`;
        context.fillText("En daarom wil ik je via deze website iets tonen", canvas.width/2, canvas.height/2);
        opacity += 0.02;
    }

    if(frameNumber >= 1080 && frameNumber < 1200){
        context.fillStyle = `rgba(255, 182, 193, ${opacity})`;
        context.fillText("En daarom wil ik je via deze website iets tonen", canvas.width/2, canvas.height/2);
        opacity -= 0.02;
    }

    if(frameNumber == 1200) opacity = 0;

    if(frameNumber > 1200){
        context.fillStyle = `rgba(255, 182, 193, ${opacity})`;
        context.fillText("I love you so much Klo, jij verdient alles!", canvas.width/2, canvas.height/2);
        opacity += 0.01;
    }

    if(frameNumber > 1350){
        context.fillStyle = `rgba(255, 182, 193, ${secondOpacity})`;
        context.fillText("En ik kan nie wachten op nog zoveel memories!", canvas.width/2, canvas.height/2 + 60);
        secondOpacity += 0.01;
    }

    if(frameNumber > 1500){
        context.fillStyle = `rgba(255, 182, 193, ${thirdOpacity})`;
        context.fillText("Happy Valentine's Day liefje <3", canvas.width/2, canvas.height/2 + 120);
        thirdOpacity += 0.01;
    }

    // SHOW BUTTON AFTER TEXT
    if(frameNumber > 1650 && button){
        button.style.display = "block";
        if (buttonOpacity < 1) {
            buttonOpacity += 0.02;
            button.style.opacity = buttonOpacity;
        }
    }

    context.shadowColor = "transparent";
}

function draw() {
    context.putImageData(baseFrame, 0, 0);
    drawStars();
    updateStars();
    drawText();

    frameNumber++;
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
