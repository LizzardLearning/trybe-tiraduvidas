/*dia 4.4: criando funções simples
1 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

Valor esperado no retorno da função: Fernanda.

2 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3];.

Valor esperado no retorno da função: 2.*/
const arrayDeTeste = [2, 3, 3, 5, 8, 2, 3];

console.log(repeteMais (arrayDeTeste));

function repeteMais (arrayInteiro = []) {
  let inteiroMaisRepete = 0;
  if (Array.isArray(arrayInteiro)===false) {
    console.error('Não é um Array!');
    return undefined;
  }
  const contador = {};
  for (let i = 0; i < arrayDeTeste.length; i += 1) {
    if (!Number.isInteger(arrayDeTeste[i])) {
      console.error('Não é um inteiro!');
      continue;
    }
    if (!Number.isInteger(contador[arrayDeTeste[i]])) contador[arrayDeTeste[i]] = 1; // se chave não existir, atribui o valor 1 a ela
    else contador[arrayDeTeste[i]] += 1;
  }
  let maiorNumero = 0;// estudar o for in
  for (cont in contador) { // estudar o for in
    if (contador[cont] > maiorNumero) { // estudar o for in
      inteiroMaisRepete = Number(cont); // estudar o for in
      maiorNumero = contador[cont]; // estudar o for in
    } // estudar o for in
  } // estudar o for in
  return inteiroMaisRepete;
}

//{ '2': 3, '3': 2, '5': 1, '8': 1 }
