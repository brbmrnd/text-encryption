let returnArea = '';
const textarea = document.getElementById('inputText');

const containerMessage = document.getElementById('container_message');
const originalContent = containerMessage.innerHTML;

const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
const copyButton = document.getElementById('copy-button');


textarea.addEventListener('input', inputValidation);

function inputValidation() {
    input = textarea.value;
    const regex = /^[a-zA-Z0-9\s]+$/;

    if (input.length === 0) {
        encryptButton.setAttribute('disabled', true)
        decryptButton.setAttribute('disabled', true);
        copyButton.setAttribute('hidden', true);
        containerMessage.innerHTML = originalContent;    

        return;

    }

    encryptButton.removeAttribute('disabled');
    decryptButton.removeAttribute('disabled');

    if (!regex.test(input)) {
        alert("Por favor, insira apenas letras e números.");
        textarea.value = input.replace(/[^\w\s]/gi, '');
    }
}

function encrypt() {
    let inputText = textarea.value;
    copyButton.removeAttribute('hidden');
    copyButton.innerHTML = 'Copiar';


    if (inputText.length !== 0) {
        let encryptedText = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        let displayElement = document.getElementById('container_message');
        displayElement.innerHTML = encryptedText;
        returnArea = encryptedText;
    } else { }
}

function decrypt() {
    let inputText = textarea.value;
    copyButton.removeAttribute('hidden');
    copyButton.innerHTML = 'Copiar';

    if (inputText.length !== 0) {
        let decryptedText = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        let displayElement = document.getElementById('container_message');
        displayElement.innerHTML = decryptedText;
        returnArea = decryptedText;
    }
}

function copyingText() {
    let copyText = returnArea;
    let copyArea = document.createElement('textarea');
    copyArea.value = copyText;
    document.body.appendChild(copyArea);

    copyArea.select();
    navigator.clipboard.writeText(copyArea.value)
        .then(function () {
            document.body.removeChild(copyArea);
            copyButton.innerHTML = 'Copiado!'
        });
}