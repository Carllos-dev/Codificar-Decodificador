
function criptografia(){
    var valor_textarea = document.querySelector('#codificar');
    var texto_codificado = document.querySelector('#copiar');

    var textoEscrito = valor_textarea.value.split("");

    var i = 0;
    while(i <= textoEscrito.length){
        if(textoEscrito[i] == 'e'){
            textoEscrito[i] = 'enter';
        }
        else if(textoEscrito[i] == 'i'){
            textoEscrito[i] = 'imes';
        }
        else if(textoEscrito[i] == 'a'){
            textoEscrito[i] = 'ai';
        }
        else if(textoEscrito[i] == 'o'){
            textoEscrito[i] = 'ober';
        }
        else if(textoEscrito[i] == 'u'){
            textoEscrito[i] = 'ufat';
        }
        i++;
    }

    texto_codificado.textContent = textoEscrito.join("").toLowerCase();
}

function descriptografia(){
    var valor_textarea = document.querySelector('#codificar');
    var texto_descodificado = document.querySelector('#copiar');
    
    var textoEscrito = valor_textarea.value;

    do{
        textoEscrito = textoEscrito.replace('enter', 'e');
    } while(textoEscrito.includes('enter'));

    do{
        textoEscrito = textoEscrito.replace('imes', 'i');
    } while(textoEscrito.includes('imes'));

    do{
        textoEscrito = textoEscrito.replace('ai', 'a');
    } while(textoEscrito.includes('ai'));

    do{
        textoEscrito = textoEscrito.replace('ober', 'o');
    } while(textoEscrito.includes('ober'));

    do{
        textoEscrito = textoEscrito.replace('ufat', 'u');
    } while(textoEscrito.includes('ufat'));

    texto_descodificado.textContent = textoEscrito;
}

function inicializarBotoes(){
    var btn_codificar = document.querySelector('#btn-codificar');
    btn_codificar.addEventListener('click', criptografia);

    var btn_decodificar = document.querySelector('#btn-decodificar');
    btn_decodificar.addEventListener('click', descriptografia);

    var btn_copiar = document.querySelector('#btn-copiar');
    btn_copiar.addEventListener('click', copiar);
}

function copiar() {
    let textoCopiar = document.querySelector('#copiar');
    textoCopiar.select();
    document.execCommand('copy');
}
  


inicializarBotoes();