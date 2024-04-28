/*
*   Lista de Exercícios 01::Exercício 02
*   Nícolas Dal Corso
*   2024-04-17
*   
*   Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
*/

/**
 * Dados a quantidade de eleitores de uma região e as quantidades de votos brancos, nulos e válidos, retorna uma string com o percentual de cada tipo de voto em relação ao total de eleitores. Note que não é feita o teste de consistência para determinar se as quantidades de votos são menores ou iguais ao número de eleitores.
 * @param {number} numEleitores 
 * @param {number} numVotosBrancos 
 * @param {number} numVotosNulos 
 * @param {number} numVotosValidos 
 */
function getPercentage(numEleitores, numVotosBrancos, numVotosNulos, numVotosValidos) {
    //  Definição das constantes de trabalho
    var resultado = "";
    const percentualBrancos = (numVotosBrancos / numEleitores) * 100;
    const percentualNulos = (numVotosNulos / numEleitores) * 100;
    const percentualValidos = (numVotosValidos / numEleitores) * 100;

    //  Construção da string de resultado
    resultado += `Percentual de votos brancos: ${percentualBrancos.toFixed(2)}% (${numVotosBrancos}/${numEleitores})\n`;
    resultado += `Percentual de votos nulos: ${percentualNulos.toFixed(2)}% (${numVotosNulos}/${numEleitores})\n`;
    resultado += `Percentual de votos válidos: ${percentualValidos.toFixed(2)}% (${numVotosValidos}/${numEleitores})`;
    
    //  Retorno do resultado
    return resultado;
};

//  Testes
console.log(`Esperado :: [100, 25, 25, 50] => [25%, 25%, 50%] \nResultado::\n${getPercentage(100, 25, 25, 50)}\n`);
console.log(`Esperado :: [100, 0, 0, 100] => [0%, 0%, 100%] \nResultado::\n${getPercentage(100, 0, 0, 100)}\n`);
console.log(`Esperado :: [100, 50, 50, 0] => [50%, 50%, 0%] \nResultado::\n${getPercentage(100, 50, 50, 0)}\n`);
console.log(`Esperado :: [100, 0, 100, 0] => [0%, 100%, 0%] \nResultado::\n${getPercentage(100, 0, 100, 0)}\n`);
console.log(`Esperado :: [525, 175, 189, 340] => [33.33%, 36%, 64.76%] \nResultado::\n${getPercentage(525, 175, 189, 340)}\n`);