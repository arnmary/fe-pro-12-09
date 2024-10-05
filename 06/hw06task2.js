
// Замість var
// var message = 'test';
// function example() {
//     if (true) {
//         var message = 'Hello, world!';
//         console.log(message);
//     }
//     console.log(message); // Виведе 'Hello, world!'
// }
// const students = [
//     { name: 'Оля', scores: { math: 85, english: 78, science: 92 } },
//     { name: 'Іван', scores: { math: 58, english: 74, science: 80 } },
//     { name: 'Марія', scores: { math: 95, english: 85, science: 99 } },
//     { name: 'Петро', scores: { math: 70, english: 65, science: 75 } },
//   ];
//   Створіть функцію яка приймає массив оброблює його map  та повертає новий масив де є імя та середній бал студента
  
//   Відфільтруйте студентів за допомогою filter в яких середній бал вище 80 балів

let message = 'test';
function example() {
    if (true) {
       let message = 'Hello, world!';
        console.log(message);
        return message;
    }
   
}
example();


const students = [
        { name: 'Оля', scores: { math: 85, english: 78, science: 92 } },
        { name: 'Іван', scores: { math: 58, english: 74, science: 80 } },
        { name: 'Марія', scores: { math: 95, english: 85, science: 99 } },
        { name: 'Петро', scores: { math: 70, english: 65, science: 75 } },
      ];


const studentsAverscores = students.map ((students)=> {
        const scor = students.scores;
       const averscores = (scor.math +scor.english +scor.science)/3;
    return { name: students.name, score: averscores} } 
       );

console.log(studentsAverscores);

const filtretStudents = studentsAverscores.filter((item)=>item.score >=80);
console.log(filtretStudents);

  
    


