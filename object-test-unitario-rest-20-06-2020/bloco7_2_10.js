//Crie uma função que deverá retornar um objeto que representa o relatório 
//do professor ou professora, as aulas que ele ou ela ministrou e o número 
//total de estudantes. Use o objeto criado no exercício 5:

console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */


//5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através 
//do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves:
// lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons),
// a saída deverá ser a seguinte:

console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
