const ingresotexto = document.getElementById("ingresotexto");
const btnencriptar = document.getElementById("btnencriptar");
const btndesencriptar = document.getElementById("btndesencriptar");
const mensajefinal = document.getElementById("mensajefinal");
const munheco = document.getElementById("munheco");
const rightinfo = document.getElementById("rightinfo");
const btncopiar = document.getElementById("btncopiar");

let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]
const remplace = (nuevoValor) => {
    mensajefinal.innerHTML = nuevoValor;
    munheco.style.display = "none";
    ingresotexto.value ="";
    rightinfo.style.display ="none";
    btncopiar.style.display ="block";
    right.classList.add("ajustar");
    mensajefinal.classList.add("ajustar");
}
const reset = () => {
    mensajefinal.innerHTML = "";
    munheco.style.display = "none";
    rightinfo.style.display = "block";
    btncopiar.style.display = "none";
    ingresotexto.focus();    
}
btnencriptar.addEventListener("click", () => {
    const texto = ingresotexto.value.toLowerCase();
    if (texto !== "") {
        function encriptar(newTexto) {
            let encryptedText = newTexto; // Crear una nueva variable para almacenar el texto encriptado
            for (let i = 0; i < remplazar.length; i++) {
                if (encryptedText.includes(remplazar[i][0])) {
                    encryptedText = encryptedText.replaceAll(remplazar[i][0], remplazar[i][1]);
                }
            }
            return encryptedText;
        }
        remplace(encriptar(texto));
    } else {
        alert("Ingrese texto a encriptar");
        reset();
    }
})

btndesencriptar.addEventListener("click", () => {
    const texto = ingresotexto.value.toLowerCase();
    if (texto !== "") {
        function desencriptar(newTexto) {
            var decryptedText = newTexto; // Crear una nueva variable para almacenar el texto desencriptado
            for (let i = 0; i < remplazar.length; i++) {
                if (decryptedText.includes(remplazar[i][1])) {
                    decryptedText = decryptedText.replaceAll(remplazar[i][1], remplazar[i][0]);
                }
            }
            return decryptedText;
        }
        remplace(desencriptar(texto));
    } else {
        alert("Ingrese texto a desencriptar");
        reset();
    }
})
btncopiar.addEventListener("click", () => {
    let texto = mensajefinal; 
    texto.select();
    document.execCommand('copy')      
    reset();
    munheco.style.display = "";
})