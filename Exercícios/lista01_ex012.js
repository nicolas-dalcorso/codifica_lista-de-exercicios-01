/*
*   Lista de Exercícios 01::Exercício 12
*   Nícolas Dal Corso
*   2024-04-18
*   
*   Exercício 12::
*   Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que, divididos por 11, dão resto igual a 5.
*/

/**
 *  Gera e imprime em tela os números de 1000 a 1999 que, quando divididos por 11, produzem resto igual a 5.
 * 
 * @returns {null}
 */
function generateNumbers(){
    for(let i=1000; i<2000; i++){
        if(i % 11 == 5){
            console.log(i);
        }
    };

    return;
};

generateNumbers();