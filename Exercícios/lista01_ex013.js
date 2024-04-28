/*
*   Lista de Exercícios 01::Exercício 13
*   Nícolas Dal Corso
*   2024-04-18
*
*   Exercício 13::
*   Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles, calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
    1 x N = N
    2 x N = 2N
    3 x N = 3N

    Esse exercício foi resolvido implementando duas funções auxiliares a serem chamadas por uma função principal:
    -   getTabuada()
    -   tabuadaToString()
    -   tabuadas()
*/

/**
 * Dado um inteiro `num`, retorna a tabuada de 1 até `num`
 * 
 * @param {number} num
 * @returns {number[]}
 */
function getTabuada(num){
    if(!(typeof(num) == "number")){
        return undefined;
    };

    var tabuada = [];

    for(let i=1; i<=num; i++){
        tabuada[i-1] = i*num;
    }

    return tabuada;
};

/**
 * Dado um vetor de inteiros, imprime-o em tela formatado conforme espera-se de uma tabuada
 * 
 * ex.:: [5, 10, 15, 20, ..., 50]
 * =>   1 x 5 = 5
 *      2 x 5 = 10
 *      ...
 *      10 x 5 = 50
 * @param {number[]}
 * @returns {string}
 */
function tabuadaToString(nums){
    var tabuada_str =   "";
    const fst_value = nums[0];

    for(let i=0; i<nums.length; i++){
        tabuada_str += `${fst_value} x ${i+1} = ${nums[i]}\n`;
    }

    return tabuada_str;
};


/**
 * Dado um vetor de 5 inteiros, imprime em tela as tabuadas de cada inteiro, de 1 até N; isto é,
 * para o inteiro 5, serão impressos 1x5, 2x5, ..., 5x5; para o inteiro 12, serão impressos 1x12, 2x12, ..., 12x12
 * 
 * @param {number[]}
 * @return {null}
 */
function tabuadas(nums){
    //  Verifica se o vetor de entrada é de tamanho 5
    if(nums.length !== 5){
        return undefined;
    }

    for(let i=0; i < 5; i++){
        console.log(tabuadaToString(getTabuada(nums[i])));
    };

    return;
};

//  Testes
function main(){
    //  Necessário para utilizar `prompt()` no NodeJS
    const prompt = require('prompt-sync')();

    //  Leitura dos números
    var nums = [];
    for(let i=0; i<5; i++){
        nums[i] = parseInt(prompt(`Digite o ${i+1}º número: `));
    };

    //  Exibição das tabuadas
    tabuadas(nums);
};