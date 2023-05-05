// funcion que encripta el texto ingresado
function encryptText(text) {
    text = text.toLowerCase();
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    return text;
}

// funcion que desencripta el texto encriptado
function descryptText(text) {
    text = text.toLowerCase();
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    return text;
}

// Funcion que copia el texto encriptado al portapapel
function copyPortapapel(text) {
    navigator.clipboard.writeText(text);
}

// capturo los elementos del HTML
const submitButton = document.getElementById("submit-button");
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const copyButton = document.getElementById("copy-button");
const encryptRadio = document.getElementById("encrypt-radio");
const decryptRadio = document.getElementById("decrypt-radio");

// pongo el foco en el textarea donde se ingresa el texto
// a encriptar
inputText.focus();

// funcion que limpia el textarea donde se ingresa el texto
// a encriptar
function limpiarIngreso() {
    inputText.value = "";
}

// funcion que limpia el textarea donde se muestra el texto
// a desencriptar
function limpiarSalida() {
    outputText.value = "";
}

// capturo el evento click del boton ENVIAR 
submitButton.addEventListener("click", function() {
    let text = inputText.value;
    let result;
    // evaluo check seleccionado
    if (encryptRadio.checked) {
        result = encryptText(text);
    } else {
        result = descryptText(text);
    }
    // envio valor del texarea del desxto encriptado al textarea
    // del texto ingresado
    outputText.value = result;
    // limpio textarea de ingreso de texto a encriptar
    limpiarIngreso();
});

// capturo el evento click del boton COPIAR/PEGAR
copyButton.addEventListener("click", function() {
    let text = outputText.value;
    // guardo en el portapapel el texto encriptado
    copyPortapapel(text);
    // en el textarea de ingreso envio el texto encriptado
    inputText.value = text;
    // activo check de desencriptar
    decryptRadio.checked = true;
    // Limpio el textarea del texto encriptado
    limpiarSalida();
});

