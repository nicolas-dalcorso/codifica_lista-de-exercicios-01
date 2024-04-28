/*
*   Lista de Exercícios 01::Exercício 10
*   Nícolas Dal Corso
*   2024-04-18
*   
*  Exercício 10::
*  Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

/**
 * Dado um inteiro, imprime-o em tela dez vezes.
 * 
 * @param {number} num
 */
function print10times(num){
    if(!(typeof(num) == "number")){
        return undefined;
    }   else{
            for(let i=0; i<10; i++){
                console.log(num);
            }
        }
    
    return null;
};

//  Testes
/**
 * Lê um número inteiro do console e o imprime em tela dez vezes.
 * @returns {void}
 */
function main(){
    //  Necessário para utilizar `prompt()` no NodeJS
    const prompt = require('prompt-sync')();

    //  Leitura do número
    const num = parseInt(prompt("Digite um número inteiro: "));

    //  Checagem de consistência
    if(isNaN(num)){
        console.log("Erro: o valor informado não é um número inteiro.");
        return;
    };

    //  Exibe o resultado
    print10times(num);
};

//  Chamada da função de teste
main();