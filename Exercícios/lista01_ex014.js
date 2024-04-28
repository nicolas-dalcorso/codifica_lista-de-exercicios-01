/*
*   Lista de Exercícios 01::Exercício 14
*   Nícolas Dal Corso
*   2024-04-18
*   
*   Exercício 14::
*   Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
*
*   A resolução deste exercício faz uso da função auxiliar `calculaMedia()`, já definida anteriormente, e de uma função para input do usuário, `getUserNumbers()`. Por fim, `printMediaFromUserNumbers()` é uma função que aplica a primeira sobre os dados da segunda função e imprime o resultado em tela.
*/

/**
 * Define um vetor de números lidos do console e retorna este vetor. O usuário pode inserir quantos valores quiser; a função é terminada quando o usuário insere `0` ao vetor. O número 0 não será inserido no vetor.
 * 
 * @returns {number[]}
 */
function getUserNumbers(){
    //  Necessário para utilizar `prompt()` no NodeJS
    const prompt = require('prompt-sync')();

    var numbers = [];
    var current;
    var index=0;

    //  Informa a regra de inserção de números ao usuário
    console.log("Você pode inserir quantos números quiser. A função terminará se um número zero (0) for inserido.");

    do{
        current = parseFloat(prompt("Insira um número: "));

        if(!isNaN(current) && current !== 0){
            numbers[index] = current;
            index += 1;
        };

    }while(current !== 0);

    return numbers;
}

/**
 * Recebe um vetor de números inseridos pelo usuário no console e retorna a média aritmética dos valores.
 */
function printMediaFromUserNumbers(){
    const numbers = getUserNumbers();
    return console.log(`Média de { ${numbers} }: ${calculaMedia(numbers).toFixed(2)}`);
};

//  Chamada da função principal
printMediaFromUserNumbers();