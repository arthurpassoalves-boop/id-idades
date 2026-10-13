function verificarIdade() {

    //1. Captura o valor digitado no campo de input pelo usuário;

    const elementoinput = document.getElementById("campoIdade");
    const idadeDigitada = parseInt(elementoinput.value);
    const nome = document.getElementById("campoNome").value;

    //o .value pega o valor digitado no input;

    //2. Localiza o elemento onde o texto de resultado será exibido

    const elementoResultado = document.getElementById("mensagemResultado");

    //3. Validação preventiva: Impede processamento se o campo estiver em branco;

    if (isNaN(idadeDigitada)) { //Nan =     Not a number (não é um número)
        elementoResultado.innerText = 'Por favor. Digite uma idade numérica válida.';
        elementoResultado.style.color = "#dc2626";
        return;
        //return = para a execução
    }

    //4. Tomada de decisão: bifurcação do fluco entre maior e menor de idade
    if (idadeDigitada < 12) {

        elementoResultado.innerText = `Olá ${nome}! Você tem ${idadeDigitada} anos e é uma criança.`;

        elementoResultado.style.color = "#16a34a";
        console.log(`${nome} tem ${idadeDigitada} anos e é uma criança.`);

        return;
    }

    else if (idadeDigitada >= 12 && idadeDigitada <= 17){

        elementoResultado.innerText = `Olá ${nome}! Você tem ${idadeDigitada} anos e é um adolescente.`;

        console.log(`${nome} tem ${idadeDigitada} anos e é um adolescente.`);

        return;
    }

    else if (idadeDigitada >= 18 && idadeDigitada<= 59){

        elementoResultado.innerText = `Olá ${nome}! Você tem ${idadeDigitada} anos e é um adulto.`;

        console.log(`${nome} tem ${idadeDigitada} anos e é um adulto.`);
        return;

    }

    else {

        elementoResultado.innerText = `Olá ${nome}! Você tem ${idadeDigitada} anos e pertence a terceira idade (atendimento preferencial).`;

        console.log(`${nome} tem ${idadeDigitada} anos e pertence a 3° idade (atendimento preferencial).`);
        return;
    }
}