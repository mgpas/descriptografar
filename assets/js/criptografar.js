document.getElementById("cifraForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const textoOriginal = document.getElementById("textoOriginal").value;
    const deslocamento = parseInt(document.getElementById("deslocamento").value);
    const botaoClicado = event.submitter.value;

    if (botaoClicado === "Criptografar") {
        const textoCriptografado = cifraDeCesar(textoOriginal, deslocamento);
        document.getElementById("resultado").value = textoCriptografado;
    } else if (botaoClicado === "Descriptografar") {
        const textoDescriptografado = cifraDeCesar(textoOriginal, -deslocamento);
        document.getElementById("resultado").value = textoDescriptografado;
    }
});

// Cifra de César
function cifraDeCesar(texto, deslocamento) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const textoMinusculo = texto.toLowerCase();
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        const char = textoMinusculo[i];
        if (alfabeto.includes(char)) {
            const indiceOriginal = alfabeto.indexOf(char);
            const indiceCriptografado = (indiceOriginal + deslocamento) % 26;
            const charCriptografado = alfabeto[indiceCriptografado];
            resultado += char === texto[i] ? charCriptografado : charCriptografado.toUpperCase();
        } else {
            resultado += texto[i];
        }
    }

    return resultado;
}
