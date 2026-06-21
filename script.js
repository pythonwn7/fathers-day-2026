function goToSurprise() {
    window.location.href = "surprise.html";
}
window.onload = function() {

    const button = document.getElementById("second-button");


    if (button) {

        setTimeout(function() {

            button.classList.remove("hidden-button");

            button.classList.add("show-button");

        }, 4000);

    }

};

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


window.addEventListener("load", function() {

    createConfetti();

});