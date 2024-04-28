
/*
*   Lista de Exercícios 01::Exercício 4,5
*   Nícolas Dal Corso
*   2024-04-18
*
*   Exercício 04 e 05::
*   04::    Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre, calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para aprovação).
    05::    Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso amédia calculada seja menor que 6,0
*
*   Este exercício foi resolvido através da implementação de duas funções:
*       - calculaMedia(valores[]), que recebe um vetor de números e retorna sua média aritmética.
*       - verificaAprovacao(media), que recebe a média aritmética e retorna uma mensagem de aprovação ou reprovação.
*
*   Por sua vez, uma terceira função foi implementada para resolver o exercício:
*       - mediaSemestral(nota1, nota2), que recebe as notas das duas avaliações e retorna a mensagem de aprovação ou reprovação.
*/

/**
 * Calcula a média aritmética de um vetor de números.
 * @param {number[]} valores
 */
function calculaMedia(valores) {
    //  Checa se os valores são números
    //  Se pelo menos um dos valores não for um número, a função retorna `undefined`
    if (!valores.every((valor) => typeof valor === 'number')) {
        return undefined;
    };

    var soma = 0;

    //  Calcula a média aritmética
    for(let i = 0; i < valores.length; i++) {
        valores[i] = parseFloat(valores[i]);
        soma += valores[i];
    };

    return soma / valores.length;
};

/**
 * Verifica se um aluno foi aprovado ou reprovado.
 * @param {number} media
 */
function verificaAprovacao(media) {
    if (media >= 6) {
        return "PARABÉNS! Você foi aprovado";
    } else {
        return "Você foi REPROVADO! Estude mais";
    };
};


/**
 * Calcula a média semestral de um aluno e retorna uma mensagem de aprovação ou reprovação.
 * @param {number} nota1
 * @param {number} nota2
 */
function mediaSemestral(nota1, nota2) {
    //  Calcula a média aritmética
    const media = calculaMedia([nota1, nota2]);

    //  Retorna a mensagem de aprovação ou reprovação
    return verificaAprovacao(media);
};


//  Testes
console.log(`Esperado :: [6, 6] => 'PARABÉNS! Você foi aprovado' \nResultado:: ${mediaSemestral(6, 6)}\n`);
console.log(`Esperado :: [5, 5] => 'Você foi REPROVADO! Estude mais' \nResultado:: ${mediaSemestral(5, 5)}\n`);
console.log(`Esperado :: [6, 5] => 'Você foi REPROVADO! Estude mais' \nResultado:: ${mediaSemestral(6, 5)}\n`);
console.log(`Esperado :: [5, 6] => 'Você foi REPROVADO! Estude mais' \nResultado:: ${mediaSemestral(5, 6)}\n`);
console.log(`Esperado :: [10, 10] => 'PARABÉNS! Você foi aprovado' \nResultado:: ${mediaSemestral(10, 10)}\n`);
console.log(`Esperado :: [0, 0] => 'Você foi REPROVADO! Estude mais' \nResultado:: ${mediaSemestral(0, 0)}\n`);