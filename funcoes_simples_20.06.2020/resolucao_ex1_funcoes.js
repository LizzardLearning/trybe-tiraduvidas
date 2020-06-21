/* RESOLVENDO O EXERCÍCIO COM BABY STEPS:

1 - primeiro identificar se teremos de criar uma função (que terá um retorno)
ou um método (que não retorna nada);
2 - identificar qual a entrada (parâmetro) esperada pela função (um array de nomes);
3 - identificar qual será o retorno esperado da função (o maior nome do array);
4 - declarar a função dando um nome coerente ao que ela fará (retornaMaiorNome);
5 - declarar o parâmetro da função com um nome coerente (arrayNomes);
  5.1 - neste caso, ao determinar 'arrayNomes = []' no parâmetro da função, determina-se
  um parâmetro padrão, garantindo que: caso a função seja chamada e não receba parâmetro
  algum, seu parâmetro será um array vazio;
6 - dentro do bloco da função, declarar qual será o seu retorno nomeando-o coerentemente;
7 - visto que ela retornará o maior nome que existir no array, cria-se uma variável
para armazená-lo (maiorNome), inicializada como uma string vazia para futuramente
no código receber o valor a ser retornado;
8 - verificar se o parâmetro da função é mesmo um array:
  8.1 - usando um if em que sua condição usa o método 'Array.isArray()' (no parêntese
  do método será colocado o nome do array a ser testado) que somente retorna true ou false;
  8.2 - caso a entrada da função não seja um array, o bloco dentro do if será executado;
  8.3 - imprimir uma mensagem de erro usando 'console.error('mensagem de sua escolha')';
  8.4 - definir um returno para encerrar a função (aqui no exemplo retornaremos uma string vazia)
9 - percorrer o array usando um laço de repetição, aqui usamos o for
10 - criar uma variável (indice) para ser o iterador deste for;
11 - definir até quando o for será executado (indice < arrayNomes.length);
12 - incrementar o iterador para que percorra por todo o array de elemento em elemento (indice += 1);
13 - determinar a condição que descobrirá qual o menor dos nomes, comparando se o tamanho da
variável inicial (maiorNome) é menor que o tamanho do nome percorrido naquele instante (arrayNomes);
14 - caso a condição seja verdeira, atribuir o valor percorrido pelo array à variável;
15 - TESTANDO: usando console.log() para chamar a função, passando como parâmetro o arrayTeste;
*/

const arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function retornaMaiorNome (arrayNomes = []) {
  let maiorNome = '';
  if (Array.isArray(arrayNomes) === false) {
    console.error('Não é um array');
    return '';
  }
  for (let indice = 0; indice < arrayNomes.length; indice += 1) {
    if (maiorNome.length < arrayNomes[indice].length) {
      maiorNome = arrayNomes[indice];
    }
  }
  return maiorNome;
}
console.log(retornaMaiorNome(arrayTeste));

//BÔNUS: FAZER UMA FUNÇÃO QUE RETORNE O MENOR NOME DO ARRAY:

/*
Seguindo a mesma lógica da função anterior, esta retornará o menor nome do array.
Graças à condição estabelecida no primeiro if dentro do for, que garante que na primeira iteração
a variável menorNome receba o nome que estiver na primeira posição do nomesArray (nomesArray[0]).
Para garantir que o retorno seja o último menor nome do arrayTeste ('Jão'), criamos a segunda condição
que compara se o tamanho do nome que está na variável menorNome é maior ou igual ao nome que está sendo
iterado naquele momento, se for verdade, menorNome recebe nomesArray[indice].
*/
const arrayTeste = ['Ananindeua', 'José', 'Lucas', 'Nádia', 'Fernanda', 'Léo', 'Jão', 'Cairo', 'Joana'];
console.log(retornaMenorNome(arrayTeste));

function retornaMenorNome (nomesArray = []) {
  let menorNome = '';
    if (Array.isArray(nomesArray) === false) {
    console.error('Não é um array.');
    return '';
  }
  for (let indice = 0; indice < nomesArray.length; indice += 1) {
    if (indice === 0) {
      menorNome = nomesArray[0];
    }
    if (menorNome.length >= nomesArray[indice].length) {
      menorNome = nomesArray[indice];
    }
  }
  return menorNome;
}

