function encrypt()
{
    var text = getInputText();

    if(text != '') {
        text = text.replaceAll('e', 'enter');
        text = text.replaceAll('i', 'imes');
        text = text.replaceAll('a', 'ai');
        text = text.replaceAll('o', 'ober');
        text = text.replaceAll('u', 'ufat');
        
        showResultPanel(text);
    }
    else{
        reset();
    }
}

function decrypt()
{
    var text = getInputText();

    if(text != '') {
        text = text.replaceAll('enter', 'e');
        text = text.replaceAll('imes', 'i');
        text = text.replaceAll('ai', 'a');
        text = text.replaceAll('ober', 'o');
        text = text.replaceAll('ufat', 'u');

        showResultPanel(text);
    }
    else{
        reset();
    }
}

function copyToClipboard(){
    var text = getResult();

    const type = "text/plain";
    const blob = new Blob([text], { type });
    const data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then(
        (successResponse) => {
            console.log('succesfully coppied!', successResponse);
            alert('Copiado: ' + text);
        },
        (failureResponse) => {
            console.error('copy failed! :(', failureResponse);
        }
    );
}

function getInputText(){
    var dom = document.getElementById("texto");
    return dom.value.trim();
}

function showResultPanel(content) {
    toggleInitialPanel(false);
    toggleResultPanel(true);
    setResult(content);
}

function reset() {
    toggleInitialPanel(true);
    toggleResultPanel(false);
    setResult('');
}

function toggleInitialPanel(show) {
    var container = document.getElementById("emptyResult");
    container.className = show ? '' : 'hidden';
}

function toggleResultPanel(show) {
    var container = document.getElementById("validResult");
    container.className = show ? '' : 'hidden';
}

function setResult(result) {
    var container = document.querySelector("#validResult>p");
    container.innerHTML = result;
}

function getResult() {
    var container = document.querySelector("#validResult>p");
    return container.innerHTML;
}

var encryptBtn = document.getElementById("encriptBtn");
encryptBtn.onclick = encrypt;

var decryptBtn = document.getElementById("decryptBtn")
decryptBtn.onclick = decrypt;

var copyBtn = document.getElementById("copyBtn")
copyBtn.onclick = copyToClipboard;

