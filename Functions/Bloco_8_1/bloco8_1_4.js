// Bloco 8.1 / Exercício 4

const assert = require('assert');
const {books} = require('./books');

const expected_result = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin'
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991
};

/*
4) Encontre o livro cujo nome possui 26 caracteres. Dica: Use a função find
*/

function getNamedBook() {
  // escreva seu código aqui
}

assert.deepEqual(getNamedBook(), expected_result);
