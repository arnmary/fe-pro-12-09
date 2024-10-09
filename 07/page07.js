let indexValueStorage = [1,2,3,'test',true,'Hello',7];
console.log(indexValueStorage);

// for (let i = 0; i < indexValueStorage.length; i++) {
//     console.log(i);
//     console.log(`index: ${i} index value${indexValueStorage[i]}`);
      
// }
for (const value of indexValueStorage) {
      console.log(`index:  value${value}`);  
}
let hardArray =[
    {username:'Tom'},
    {username:'Bob'},
    {username:'Ann'}
]
for (let item  of hardArray) {
   console.log(`Username: ${item.username}`);
    
}
let myStringValue = 'Hello World !';
for (let char of myStringValue) {
    console.log(`Char value$ ${char}`);
    
}
function myCalc() {

  for (let argumentItem of arguments) {
    console.log(`Item value: ${argumentItem}`);
  } 
    
}
myCalc('First',true,'test',4,5,6); 


//forin для обЄктів
let objValue = {
    a:1,
    b:22,
    c:33,
    info:function () {
        console.log('Hello');
        
    }
}
console.log(`===forin===`);

for (const keyName in objValue) {
   console.log(`Keyname${keyName} key value:${objValue[keyName]}`);
//    console.log( objValue.hasownProperty(keyName));//Перевірка ключа.
}
//стрілкові функції не мають правильного контексту виклику this, тому він повертає andefined.
let userInfo = {
    userName: 'Tom',
    aboutUser:function(){
       console.log(`user name ${this.userName}`);
        
    }
}
userInfo.aboutUser();


"use strict"; // вказується на початку коду.Перекладається як суровий. Викликає помилки при використанні документації не правильно

//ООП Об'єктно орієнтоване програмування:

//функція конструктор

function BookConstructor(title,autor,year) {
   this.title = title;
   this.autor = autor;
   this.year = year; 
//    this.bookInfo =function(){
//     console.log(`Book name ${this.title} prodaction year ${this.year}`);
    
//    }
}
BookConstructor.prototype.bookInfo = function(){
        console.log(`Book name ${this.title} production year ${this.year}`);
}


let book1 = new BookConstructor('Harry Potter','J.K.Rowling',1997);
let book2 = new BookConstructor('Harry Potter','J.K. Rowling',1998)
console.log(book1);
console.log(book2);
book1.bookInfo();


//Prototype

let arrayValue = [1,2,4];
console.log(arrayValue);


//function constructor
class Book {
    constructor(title, autor, year) {
     this._title = title;
     this._autor = autor;
     this._year = year;   
    }
    getAllInfo(){
        console.log(`Book name ${this._title} production year ${this._year}`);
        
    }
get title(){
    return ` Geter result ${this._title}`
}
set title(newTitle){
  this._title = newTitle  
}
static createBookFromCSV(csvString){
    const[title,autor,year]=csvString.split(",");
    return new Book(title,autor,parseInt(year));
}
}

let book3 = new Book('Harry Potter 3','J.K. Rowling', 2000);
// console.log(book3);
book3.getAllInfo();

console.log( book3.title);
book3.title = 'Poter SET';
console.log(book3);


let jsBook = Book.createBookFromCSV('Javascript, Oreily, 2012');
console.log(jsBook);

class Product {
    constructor(name, price) {
       this._name = name;
       this._price =price;
    }
    getInfo(){
        console.log(`${this._name} has price${this._price}`);
        
    }
}

let myProduct = new Product('apple','1$');
console.log(myProduct);

//наслідування


class Electronics extends Product {
    constructor(name, price, type) {
        super(name, price);
        this._type =type;
    }
    getElectronicInfo(){
        console.log(`${this._name}  Type${this._type}`);
        
    }
}
let laptop = new Electronics('HP',900,'laptop');
laptop.getInfo();
laptop.getElectronicInfo();

//Поліморфізм дозволяє використовувати різні об'єкти через їх спільний інтерфейс.

class Basket{
constructor(){
this.product = [];
}
addProduct(product){
    this.product.push(product);

}
get totalPrice(){
    let price = 0;
    this.product.forEach(item => {
       price +=item._price 
    });
    return price;
}
}

let simpleBook = new Product('Simple book', 100);
let phone = new Electronics('Mobile phone', 250, 'mobile');

let basket = new Basket();
console.log(basket);
basket.addProduct(simpleBook);
basket.addProduct(phone);

console.log(`Shopping total price ${basket.totalPrice}`);


//math
console.log('===Math===');

// піднесення до степеню:
let powValue = Math.pow(8,2);
console.log(powValue);

// корінь квадратний

console.log(`Math.sqrt = ${Math.sqrt(powValue)}`);

//min-max

console.log(Math.max(0,11,12,111,120,250,400,-100,10));
console.log(Math.min(0,11,12,111,120,250,400,-100,10));

//заокруглення

console.log('Floor');
console.log(Math.floor(3.9));//заокруглює в меньшу сторону
console.log('Ceil');
console.log(Math.ceil(3.9));// заокруглює в більшу сторону
console.log('Round');
console.log(Math.round(3.9));//справедливе заокруглення


console.log('Math.random 0-1');
console.log(Math.random()*10);
console.log(Math.random()*10);
console.log(Math.random()*10);
console.log(Math.random()*10);
console.log(Math.random()*10);











