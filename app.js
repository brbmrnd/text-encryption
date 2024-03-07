let returnArea = '';

function inputValidation() {
    let textarea = document.getElementById('inputText');
    input = textarea.value;
    const regex = /^[a-zA-Z0-9\s]+$/;
    let copyButton = document.getElementById('copy-button');
    

    if (input.length === 0) {
        document.getElementById('encrypt-button').setAttribute('disabled', true);
        document.getElementById('decrypt-button').setAttribute('disabled', true);
        copyButton.innerHTML = 'Copiar';
        
        return;
    } else {
        document.getElementById('encrypt-button').removeAttribute('disabled');
        document.getElementById('decrypt-button').removeAttribute('disabled');
    }

    if (!regex.test(input)) {
        alert("Por favor, insira apenas letras e números.");
        textarea.value = input.replace(/[^\w\s]/gi, '');
    }
}

function encrypt() {
    let inputText = document.getElementById('inputText').value;
    document.getElementById('copy-button').removeAttribute('hidden');

    if (inputText.length != 0) {
        inputText = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        let displayElement = document.getElementById('container_message');
        displayElement.innerHTML = inputText;
        returnArea = inputText;
    } else {}
}

function decrypt() {
    let inputText = document.getElementById('inputText').value;
    document.getElementById('copy-button').removeAttribute('hidden');

    if (inputText.length != 0) {
        inputText = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        let displayElement = document.getElementById('container_message');
        displayElement.innerHTML = inputText;
        returnArea = inputText;
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

            let copyButton = document.getElementById('copy-button');
            copyButton.innerHTML = 'Copiado!'
        });
}




