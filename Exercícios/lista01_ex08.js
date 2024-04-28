/*
*   Lista de Exercícios 01::Exercício 8
*   Nícolas Dal Corso
*   2024-04-18
*
*
*  Exercício 08::
*  Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
*/

/**
 * Dado um par de valores de entrada, retorna-os ordenados de forma crescente.
 * 
 * @param {number} num1
 * @param {number} num2
 * @returns {number[]}
 */
function sortPair(num1, num2){
    //  Checa se os valores são numéricos
    if(!(typeof(num1) == "number") || !(typeof(num2) == "number")){
        return undefined;
    }   else{
            var pair = [];

            if(num1 < num2){
                pair[0] = num1;
                pair[1] = num2;
            }   else{
                    pair[0] = num2;
                    pair[1] = num1;
            }
    }

    return pair;
};


//  Testes
/**
 * Lê do console dois números e os ordena de forma crescente.
 * @returns {void}
*/
function main(){
    //  Necessário para utilizar `prompt()` no NodeJS
    const prompt = require('prompt-sync')();

    //  Leitura dos números
    const num1 = parseFloat(prompt("Digite o primeiro número: "));
    const num2 = parseFloat(prompt("Digite o segundo número: "));

    //  Checagem de consistência
    if(isNaN(num1) || isNaN(num2)){
        console.log("Erro: ao menos um dos valores não é um número.");
        return;
    };

    //  Ordena os números
    const pair = sortPair(num1, num2);

    //  Exibe o resultado
    console.log(`Os números em ordem crescente são: ${pair[0]} e ${pair[1]}.`);
};

//  Chamada da função principal
main();