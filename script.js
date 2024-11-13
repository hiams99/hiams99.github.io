document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("backgroundVideo");
    const playButton = document.getElementById("playButton");
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const message = document.getElementById("message");
    const noMessage = document.getElementById("noMessage");
    const name = prompt("Ingresa tu nombre para hacer esto más especial:");

    // Mostrar el nombre de la persona
    if (name) {
        document.getElementById("name").textContent = name;
    } else {
        document.getElementById("name").textContent = "mi amor";
    }

    // Botón para reproducir el video con sonido
    playButton.addEventListener("click", () => {
        video.muted = false;
        video.play();
        playButton.style.display = "none"; // Ocultar el botón después de hacer clic
    });

    // Interacción cuando se selecciona "Sí"
    yesButton.addEventListener("click", () => {
        message.classList.remove("hidden");
        yesButton.style.display = "none";
        noButton.style.display = "none";
    });

    // Interacción cuando se selecciona "No"
    noButton.addEventListener("click", () => {
        noMessage.classList.remove("hidden");
        yesButton.style.display = "none";
        noButton.style.display = "none";
    });
});
