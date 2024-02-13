var clickCond = true; 

const sobreAbierto = 'Img/2.png';
const sobrePregunta = 'Img/3.png';
const sobreCerrado = document.querySelector(".imgSobre");
const botones = document.querySelector(".botones");
const overlay = document.querySelector(".overlay");
const imgFin = document.querySelector(".imgFin");

sobreCerrado.addEventListener("click", () => {
    if (clickCond) {
        sobreCerrado.style.transition = "transform 0.9s ease";
        sobreCerrado.src = sobreAbierto;
        sobreCerrado.style.transform = "scale(1.3)";
        sobreCerrado.style.paddingBottom = "1rem";
        clickCond = false;

        sobreCerrado.addEventListener("transitionend", () => {
            //Imagen de pregunta
            sobreCerrado.src = sobrePregunta;
            sobreCerrado.style.transform = "scale(1.3)";
            botones.style.display = "block";
            sobreCerrado.style.cursor = "initial";
        }, {once: true}); // El evento de transición se activará solo una vez
    }
});

const confirmar = () => {
    overlay.classList.add("visible"); // Agrega la clase 'visible' para mostrar suavemente el overlay
}


imgFin.addEventListener("click", () => {
    // Recarga la página
    window.location.reload();
});