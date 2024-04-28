/*
*   Lista de Exercícios 01::Exercício 15
*   Nícolas Dal Corso
*   2024-04-18
* 
*   Exercício 15::
*   Fazer um algoritmos para receber um número decimal e o peso de cada número até que o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos.
*
*   Este exercício foi resolvido utilizando algumas funções auxiliares:
*   -   getPairWeightValue()
*   -   getArrayOfPairs()
*   -   calculaMediaPonderada()
*   -   printMediaPonderadaFromUserInput()
*/

/**
 * Dados um valor e seu peso, retorna um objeto cujas propriedades são os parâmetros de entrada.
 * @param {number} value
 * @param {number} weight
 * @return {object}
 */
function getPairWeightValue(value, weight){
    return {value: value, weight: weight};
}


/**
 * Lê do console valores para formar um vetor de pares (valor, peso). O usuário pode inserir quantos elementos quiser. A função termina quando o usuário inserir zero (0) como valor.
 * 
 * @returns {object[]}
 */
function getArrayOfPairs(){
    //  Necessário para utilizar `prompt()` no NodeJS
    const prompt = require('prompt-sync')();

    var pairs = [];
    var current_value;
    var current_weight;

    //  Informa a regra de execução para o usuário
    console.log("Insira quantos pares (valor, peso) quiser. A inserção de valores termina quando algum valor inserido for igual a zero (0). Se o peso associado a um valor for igual a zero, o par não será inserido no vetor de pares.\n");

    do{
        current_value   = parseFloat(prompt("Insira um valor: "));

        //  Evita que o usuário seja perguntado pelo peso, quando o valor já é zero
        if(current_value !== 0){
            current_weight  = parseFloat(prompt("Insira o peso associado: "));
        };
        
        if(!(isNaN(current_value)) && !(current_weight == 0) && !(current_value == 0)){
            pairs.push(getPairWeightValue(current_value, current_weight));
        }
    }while(current_value !== 0);
        
    return pairs;
}


/**
 * Dado um vetor de objetos {value: {number}, weight: {number}}, retorna a média ponderada dos valores.
 * 
 * @param {object[]}
 * @returns {number}
 */
function calculaMediaPonderada(pairsValueWeight){
    var sum_weights = 0;
    var sum_pairs = 0;

    for(let i=0; i<pairsValueWeight.length; i++){
        sum_pairs   += pairsValueWeight[i].value*pairsValueWeight[i].weight;
        sum_weights += pairsValueWeight[i].weight;
    };

    return sum_pairs / sum_weights;
};

/**
 * Recebe valores e seus pesos do usuário pelo console, calcula a média ponderada e a exibe em tela.
 */
function printMediaPonderadaFromUserInput(){
    //  Constrói o vetor de pares (objects) {valor, peso}
    const pairs = getArrayOfPairs();

    //  Calcula a média ponderada
    const media_ponderada = calculaMediaPonderada(pairs);

    //  Quebra de linha
    console.log("\n");

    //  Imprime formatado o vetor de objetos
    for(let i=0; i<pairs.length; i++){
        console.log(`${i+1}\tvalor: ${pairs[i].value}\tpeso: ${pairs[i].weight}\n`);
    };

    //  Imprime a média
    console.log(`Média ponderada do vetor: ${media_ponderada.toFixed(3)}`);

    return;
};

//  Chamada da função principal
printMediaPonderadaFromUserInput();