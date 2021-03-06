/*
* Author: Philipe Siqueira
* Versão 1.0
* Descrição: Contagem de bits
* Escreva uma função que use um número inteiro como entrada e retorne o número de 
* bits iguais a um na representação binária desse número. Você pode garantir que a 
* entrada não seja negativa.
* Exemplo : A representação binária de 1234é 10011010010, portanto, a função deve 
* retornar 5 neste caso
*
* Description: Bit Counting
* Write a function that takes an integer as input, and returns the number of bits 
* that are equal to one in the binary representation of that number. You can 
* guarantee that input is non-negative.
* Example: The binary representation of 1234 is 10011010010, so the function 
* should return 5 in this case
*/

/*
Pega o número, converte para binário, transforma o binário em vetor e filtra o 
vetor pelos bits 1 retornando a quantidade.
*/
const countBits = (n) => {
  return n.toString(2).split('').filter(value => value == 1).length
};


module.exports = countBits