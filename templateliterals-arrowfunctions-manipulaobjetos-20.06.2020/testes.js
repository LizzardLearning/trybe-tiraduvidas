const arrayTeste = ['Jose', 'Lucas', 'Nadia', 'Fernanda', 'Cairo', 'Joana'];
function retornaMaiorNome (nomesArray=[]) {
  let maiorNome = '';
  //código aqui
  if (Array.isArray(nomesArray) === false) {
  console.error('Não é um array');
  return '';
  }
  for (let i = 0; i < nomesArray.length; i += 1) {
    console.log(i; nomesArray[i]);
  }
  return maiorNome;
}
retornaMaiorNome(arrayTeste);