/*
*   Lista de Exercícios 01::Exercício 03
*   Nícolas Dal Corso
*   2024-04-17
*   
*   Exercício 03::
*   Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
*       Some 25 ao primeiro inteiro;
*       Triplique o valor do segundo inteiro;
*       Modifique o valor do terceiro inteiro para 12% do valor original;
*       Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou) dos primeiros três inteiros.
*/

/**
 * Dados 4 números inteiros, realiza operações sobre eles.
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @param {number} num4
 */
function operacoesInteiros(num1, num2, num3, num4) {
    //  Definição das constantes de trabalho
    const soma25 = num1 + 25;
    const triplo = num2 * 3;
    const dozePorcento = num3 * 0.12;
    num4 = num1 + num2 + num3;

    //  Retorno dos resultados
    return {
        soma25,
        triplo,
        dozePorcento,
        num4
    };
};

//  Testes
/**
 * Lê do console quatro inteiros e os aplica sobre `operacoesInteiros()`.
 * @returns {void}
 */
function main() {    
    //  Necessário para utilizar `prompt()` no NodeJS
    const prompt = require('prompt-sync')();

    //  Leitura dos números
    const num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
    const num2 = parseInt(prompt("Digite o segundo número inteiro: "));
    const num3 = parseInt(prompt("Digite o terceiro número inteiro: "));
    const num4 = parseInt(prompt("Digite o quarto número inteiro: "));

    //  Checagem de consistência
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        console.log("Erro: ao menos um dos valores não é um número inteiro.");
        return;
    };

    //  Realiza as operações
    const resultados = operacoesInteiros(num1, num2, num3, num4);

    //  Exibe os resultados
    console.log(`Resultado das operações sobre os números ${num1}, ${num2}, ${num3} e ${num4}:`);
};


//  Chamada da função principal
main();