
/*
*   Lista de Exercícios 01::Exercício 9
*   Nícolas Dal Corso
*   2024-04-18
*   
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


//  Testes
/**
 * Lê do console um número inteiro e o aplica sobre `getRegiaoOrigem()`.
 * @returns {void}
*/
function main(){
    //  Necessário para utilizar `prompt()` no NodeJS
    const prompt = require('prompt-sync')();

    //  Leitura dos números
    const codigo = parseInt(prompt("Digite o código de origem do produto: "));

    //  Checagem de consistência
    if (isNaN(codigo)) {
        console.log("Erro: o valor informado não é um número inteiro.");
        return;
    };

    //  Realiza o cálculo
    const regiaoOrigem = getRegiaoOrigem(codigo);

    //  Exibe o resultado
    console.log(regiaoOrigem);
};

//  Chamada da função principal
main();