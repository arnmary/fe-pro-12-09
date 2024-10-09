// По классам
// 1 Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.
// 2 Методи класу:
// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.
// 3 Наслідування:
// Створіть клас Student, який наслідує від класу Person.
// Додайте властивість studentId до класу Student.
// Додайте метод study, який виводить повідомлення про вивчення студентом.

class Pearson {
    constructor(name, age) {
       this._name = name; 
       this._age =age;
    }
    getAllInfo(){
        console.log(`Pearson name ${this._name} age${this._age}`);
        
    }
 sayHello(){
    console.log(`Hello ${this._name}`);
    
 }
  
}

let pearson1 = new Pearson('John', 30);
pearson1.getAllInfo();
console.log(pearson1);
pearson1.sayHello();
console.log('Hello',pearson1);




class Student extends Pearson{
    constructor(name, age, student){
super(name,age);
this._student = student;
    }
    geStudentInfo(){
        console.log(`Pearson name ${this._name} age ${this._age} occupation ${this._student}`);
        
    }

 }
 
    
 

 
 class studentId extends Student{
    constructor(name, age, studentId){
         super(name,age);
         this._studentId = studentId;
    }
  getstudentIdinfo(){
    console.log(`Pearson name ${this._name} age ${this._age} study ${this._studentId}`);
    
  }
   study(){
    console.log(`${this._name} study`);
 }
 } 



    
  let newStudent = new Student('John' ,
    30,'student');
    console.log(newStudent);

    let newStudentId = new studentId( 'John', 30,'Economic');
    console.log(newStudentId); 
    