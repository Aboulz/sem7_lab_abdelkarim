document.addEventListener("DOMContentLoaded", function() {
    const boutons = document.querySelectorAll("article button");
    const modale = document.querySelector(".modale");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    boutons.forEach(button => {
        button.addEventListener("click", function() {
            modale.classList.add("active");
            overlay.classList.add("active");
        });
    });

    modale.addEventListener("click", function() {
        modale.classList.remove("active");
        overlay.classList.remove("active");
    });

    overlay.addEventListener("click", function() {
        modale.classList.remove("active");
        overlay.classList.remove("active");
    });
});
