/*
*   Lista de Exercícios 01::Exercício 16
*   Nícolas Dal Corso
*   2024-04-18
* 
*   Exercício 16::
*   Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
*/

/**
 * Imprime os primeiros `num` números primos maiores que 100
 */
function printPrimeNumbers(num){
    var prime_numbers = [];
    var current = 101;

    //  Enquanto não se atinge o número de primos desejado
    while(prime_numbers.length < num){
        if(isPrime(current)){
            prime_numbers.push(current);
        }

        current += 1;
    };

    console.log(prime_numbers);
    return;
};


/**
 *  Checa se um número é primo
 * 
 * @param {number}
 * @returns {boolean}
 */
function isPrime(num){
    //  É necessário somente pesquisar até a raiz quadrada do número, pois se um número é divisível por outro, o maior divisor é a raiz quadrada do número
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i == 0){
            return false;
        }
    }

    return true;
};


//  Chamada da função principal
printPrimeNumbers(50);