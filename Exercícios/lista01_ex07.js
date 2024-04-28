
/*
*   Lista de Exercícios 01::Exercício 7
*   Nícolas Dal Corso
*   2024-04-18
* 
*   Exercício 07::
*   As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
*
*/

/**
 * Dada uma quantidade de maçãs a serem compradas, retorna o valor a ser pago conforme a regra de negócio:
 *  R$ 0.3 por maçã, se a quantidade for < 12;
 *  R$ 0.25 por maçã, caso contrário.
 * 
 * @param {number} qtdeMacas 
 * @returns {number}
 */
function getValorCompraMacas(qtdeMacas) {
    //  Checa se o parâmetro é numérico
    if(!(typeof(qtdeMacas) == 'number')){
        return undefined;
    };

    if(qtdeMacas < 12){
        return qtdeMacas*0.3;
    };
    
    return qtdeMacas*0.25;
};

//  Testes
/**
 * Lê do console um número inteiro e o aplica sobre `getValorCompraMacas()`.
 * @returns {void}
 */
function main() {
    //  Necessário para utilizar `prompt()` no NodeJS
    const prompt = require('prompt-sync')();

    //  Leitura dos números
    const qtdeMacas = parseInt(prompt("Digite a quantidade de maçãs a serem compradas: "));

    //  Checagem de consistência
    if (isNaN(qtdeMacas)) {
        console.log("Erro: o valor informado não é um número inteiro.");
        return;
    };

    //  Realiza o cálculo
    const valorCompra = getValorCompraMacas(qtdeMacas);

    //  Exibe o resultado
    console.log(`O valor total da compra é R$ ${valorCompra.toFixed(2)}.`);
};

//  Chamada da função principal
main();
