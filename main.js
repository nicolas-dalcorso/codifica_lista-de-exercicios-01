/**
 * +praTi && Codifica -- Formação Desenvolvedor Full Stack Júnior
 * Lista de Exercícios 01
 * 
 * Os exercícios foram resolvidos através da implementação de funções.
 */


/*
 * Exercício 01::
 * Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.
*/


/**
 * 
 * Converte uma temperatura em graus Celsius para graus Fahrenheit. O parâmetro de entrada `celsius` deve ser um número, caso contrário, a função retornará `undefined`.
 *
 * @param   {number} celsius Temperatura em graus Celsius.
 * @returns {number} Temperatura em graus Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
    //  Checa se o parâmetro de entrada é um número
    if (typeof celsius !== 'number') {
        return undefined;
    }

    //  Converte a temperatura de Celsius para Fahrenheit
    return (celsius * 9/5) + 32;
};

/*
*   Exercício 02::
*   Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e      escrever o percentual que cada um representa em relação ao total de eleitores.
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

/*
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


/*
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


/*
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



/*
*   Exercício 07::
*   As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
*
*/

/**
 * Dada uma quantidade de maçãs a serem compradas, retorna o valor a ser pago conforme a regra de negócio:
 *  R$ 0.3 por maçã, se a quantidade for < 12;
 *  R$ 0.25 por maçã, caso contrário.
 * 
 * @param {number} qtdeMacas 
 * @returns {number}
 */
function getValorCompraMacas(qtdeMacas) {
    //  Checa se o parâmetro é numérico
    if(!(typeof(qtdeMacas) == 'number')){
        return undefined;
    };

    if(qtdeMacas < 12){
        return qtdeMacas*0.3;
    };
    
    return qtdeMacas*0.25;
};


/**
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


/*
 *  Exercício 09:: [O enunciado e a tabela foram omitidos desta documentação]
*/

/**
 * Dado um código de origem, retorna uma string referente à região de origem a qual o código se refere, conforme a regra:
 *      código      5,6                 reg. nordeste
 *      código      7,8,9               reg. sudeste
 *      código      [10,20]             reg. centro-oeste
 *      código      [25,50]             reg. nordeste
 *      código      fora dos intervalos produto importado
 * @param {number} codigo 
 */
function getRegiaoOrigem(codigo){
    //  Checa se o parâmetro é numérico
    if(!(typeof(codigo) == 'number')){
        return undefined;
    }   else{
        var regiaoOrigem = "Produto originário da região ";

        //  Tenta parear o parâmetro de entrada com algum dos intervalos
        if(codigo == 5 || codigo == 6){
            regiaoOrigem += "Nordeste";
        }   else if(codigo == 7 || codigo == 8 || codigo == 9){
                regiaoOrigem += "Sudeste";
            }   else if(codigo >= 10 && codigo <= 20){
                    regiaoOrigem += "Centro-Oeste";
                }   else if(codigo >= 25 && codigo <= 50){
                        regiaoOrigem += "Nordeste";
                    }   else{
                        regiaoOrigem = "Produto importado.";
                        };
    };

    return regiaoOrigem;
};

/*
 *  Exercício 10::
 *  Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

/**
 * Dado um inteiro, imprime-o em tela dez vezes.
 * 
 * @param {number} num
 */
function print10times(num){
    if(!(typeof(num) == "number")){
        return undefined;
    }   else{
            for(let i=0; i<10; i++){
                console.log(num);
            }
        }
    
    return null;
};

/*
 * Exercício 11::
 * 11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou NEGATIVO.
 */

/**
 * Lê do console uma quantidade indeterminada de números e imprime em tela se o valor fornecido é par ou ímpar.
 * A função termina se o usuário informa um valor nulo ("") ou negativo.
 * 
 * @returns {null}
 */
function verifyParity(){
    //  Necessário para utilizar `prompt()` no NodeJS
    const prompt = require('prompt-sync')();

    do{
        //  Lê e processa para ponto flutuante a entrada do usuário
        var number = parseFloat(prompt("Informe um número: "));

        //  Verifica se a entrada foi convertida para `NaN` ou para um valor válido
        if(!isNaN(number) && number >= 0){
            if(number % 2 == 0){
                console.log(`${number} é um valor PAR`);
            }   else{                    
                    console.log(`${number} é um valor ÍMPAR`);
                }
        }

    }while(number !== "" && number >= 0);
}

/*
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


/*
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

/*
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


/*
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

/*
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