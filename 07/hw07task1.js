//Використовуючи for in  виведіть значення з обєктку в console.log

const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};
for (let key in person) {
  console.log(`Name : ${person.name} age:${person.age} occupation: ${person.occupation}`);
  
}