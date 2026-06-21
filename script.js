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