const revisar = document.getElementById("btn-revisar");
const enviar = document.getElementById("btn-enviar");
const opcion1 = document.getElementById("metal slug");
const opcion2 = document.getElementById("cyberpunk2077");
const mensaje = document.getElementById("resultado");

revisar.onclick = function () {

    const seleccionado = opcion1.checked || opcion2.checked;

    enviar.disabled = seleccionado ? false : true;

    mensaje.textContent = seleccionado
        ? "Puedes enviar la información."
        : "Debes seleccionar al menos una opción.";

};

enviar.onclick = function () {
    mensaje.textContent = "Encuesta terminada";
};