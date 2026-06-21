function goToSurprise() {

    window.location.href = "surprise.html";

}



function createConfetti() {

    const container = document.getElementById("confetti-container");

    if (!container) {

        return;

    }


    for (let i = 0; i < 100; i++) {

        let piece = document.createElement("div");

        piece.className = "confetti-piece";


        piece.style.left = Math.random() * 100 + "vw";


        piece.style.animationDelay = Math.random() * 2 + "s";


        piece.style.backgroundColor =
            "hsl(" + Math.random() * 360 + ", 100%, 50%)";


        container.appendChild(piece);


        setTimeout(function() {

            piece.remove();

        }, 5000);

    }

}



function showMessage() {

    const message = document.getElementById("message");


    if (message) {

        message.classList.remove("hidden-message");

        message.classList.add("show-message");

    }

}



window.onload = function() {


    createConfetti();



    const button = document.getElementById("second-button");


    if (button) {


        setTimeout(function() {


            button.classList.remove("hidden-button");

            button.classList.add("show-button");


        }, 4000);


    }


};

const husky = document.getElementById("husky");


if (husky) {

    const bark = new Audio("sounds/bark.mp3");


    husky.addEventListener("click", function() {

        bark.currentTime = 0;

        bark.play();

    });

}