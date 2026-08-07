

const clickSound = document.getElementById("clickSound");
const messageSound = document.getElementById("messageSound");
const paperSound = document.getElementById("paperSound");
const meowSound = document.getElementById("meowSound");

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (event) {

        const parentLink = this.closest('a');

        if (parentLink) {
            event.preventDefault();
        }

        if (clickSound) {
            clickSound.currentTime = 0;
            clickSound.play().then(() => {
                if (parentLink) {
                    clickSound.onended = function() {
                        window.location.href = parentLink.href;
                    };
                }
            }).catch(() => {
                if (parentLink) {
                    window.location.href = parentLink.href;
                }
            });
        } else {
            if (parentLink) {
                window.location.href = parentLink.href;
            }
        }

    });

});

document.querySelectorAll(".hotspot").forEach(hotspot => {

    hotspot.addEventListener("click", function () {


        document.querySelectorAll(".popup").forEach(popup => {
            popup.style.display = "none";
        });


        if (messageSound) {
            messageSound.currentTime = 0;
            messageSound.play();
        }


        if (hotspot.classList.contains("ginger") && meowSound) {
            meowSound.currentTime = 0;
            meowSound.play();
        }


        const popup = hotspot.querySelector(".popup");

        if (popup) {
            popup.textContent = hotspot.dataset.message;
            popup.style.display = "block";
        }

    });

});


const paper = document.querySelector(".paper");
const clue = document.getElementById("clue");
const close = document.getElementById("close");

if (paper && clue) {

    paper.addEventListener("click", function () {

        if (paperSound) {
            paperSound.currentTime = 0;
            paperSound.play();
        }

        clue.style.display = "block";

    });

}

if (close && clue) {

    close.addEventListener("click", function () {

        if (clickSound) {
            clickSound.currentTime = 0;
            clickSound.play();
        }

        clue.style.display = "none";

    });

} 