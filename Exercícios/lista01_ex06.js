/*
*   Lista de Exercícios 01::Exercício 6
*   Nícolas Dal Corso
*   2024-04-18
*   
*   Exercício 06::
*   Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

Este exercício foi resolvido através da implementação de duas função auxiliares e uma função principal:
-   checaTriangulo(A, B, C), que verifica se os lados fornecidos formam um triângulo.
-   tipoTriangulo(A, B, C), que verifica o tipo de triângulo formado.
-   verificaTriangulo(A, B, C), que chama as duas funções anteriores e retorna o tipo de triângulo formado.
*/

/**
 * Verifica se três valores fornecidos formam um triângulo e, em caso positivo, retorna o tipo de triângulo formado.
 * A desigualdade triangular afirma que a soma de dois lados de um triângulo é sempre maior ou igual ao terceiro lado. Portanto, para que um triângulo seja formado, é necessário que A < B + C, B < A + C e C < A + B.
 * 
 * @param {number} A
 * @param {number} B
 * @param {number} C
 */
function checaTriangulo(A, B, C) {
    //  Checa se os parâmetros são números
    if ((!typeof(A) == "number") || (!typeof(B) == "number") || (!typeof(C) == "number")){
        return undefined;
    };

    return (A <= B + C) && (B <= A + C) && (C <= A + B);
};

/**
 * Verifica o tipo de triângulo formado.
 * @param {number} A
 * @param {number} B
 * @param {number} C
 */
function tipoTriangulo(A, B, C) {
    if (A === B && B === C) {
        return "Triângulo equilátero";
    } else if (A === B || A === C || B === C) {
        return "Triângulo isósceles";
    } else {
        return "Triângulo escaleno";
    };
};


/**
 * Verifica se os lados fornecidos formam um triângulo e, em caso positivo, retorna o tipo de triângulo formado.
 * @param {number} A
 * @param {number} B
 * @param {number} C
 */
function verificaTriangulo(A, B, C) {
    if (checaTriangulo(A, B, C)) {
        return tipoTriangulo(A, B, C);
    } else {
        return "Os lados fornecidos não formam um triângulo";
    };
};

//  Testes
/**
 * Lê do console três números e os aplica sobre `verificaTriangulo()`.
 * @returns {void}
 */
function main() {    
    //  Necessário para utilizar `prompt()` no NodeJS
    const prompt = require('prompt-sync')();

    //  Leitura dos números
    const A = parseInt(prompt("Digite o primeiro número inteiro: "));
    const B = parseInt(prompt("Digite o segundo número inteiro: "));
    const C = parseInt(prompt("Digite o terceiro número inteiro: "));

    //  Checagem de consistência
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        console.log("Erro: ao menos um dos valores não é um número inteiro.");
        return;
    };

    //  Realiza as operações
    const resultado = verificaTriangulo(A, B, C);

    //  Exibe os resultados
    console.log(`Resultado das operações sobre os números ${A}, ${B} e ${C}: ${resultado}`);
};

//  Chamada da função principal
main();