/*
 *  Lista de Exercícios 01::Exercício 01
 *  Nícolas Dal Corso
 *  2024-04-17
 * 
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


//  Tests
console.log(`Esperado:: 0°C     = 32°F          Resultado:: 0°C     = ${celsiusToFahrenheit(0)}°F`);  // Expected output: 32°F
console.log(`Esperado:: 100°C   = 212°F         Resultado:: 100°C   = ${celsiusToFahrenheit(100)}°F`);  // Expected output: 212°F
console.log(`Esperado:: -40°C   = -40°F         Resultado:: -40°C   = ${celsiusToFahrenheit(-40)}°F`);  // Expected output: -40°F
console.log(`Esperado:: "25"    = undefined     Resultado:: "25"    = ${celsiusToFahrenheit("25")}`);  // Expected output: undefined
