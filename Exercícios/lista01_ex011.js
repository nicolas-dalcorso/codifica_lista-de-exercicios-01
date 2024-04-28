/*
*   Lista de Exercícios 01::Exercício 11
*   Nícolas Dal Corso
*   2024-04-18
*   
* Exercício 11::
* 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.
*/

/**
 * Lê do console uma quantidade indeterminada de números e imprime em tela se o valor fornecido é par ou ímpar.
 * A função termina se o usuário informa um valor nulo ("") ou negativo.
 * 
 * @returns {null}
 */
function verifyParity(){
    //  Necessário para utilizar `prompt()` no NodeJS
    const prompt = require('prompt-sync')();

    do{
        //  Lê e processa para ponto flutuante a entrada do usuário
        var number = parseFloat(prompt("Informe um número: "));

        //  Verifica se a entrada foi convertida para `NaN` ou para um valor válido
        if(!isNaN(number) && number >= 0){
            if(number % 2 == 0){
                console.log(`${number} é um valor PAR`);
            }   else{                    
                    console.log(`${number} é um valor ÍMPAR`);
                }
        }

    }while(number !== "" && number >= 0);
}

verifyParity();