//htths
//http !!!
document.cookie = "user=Tom; SameSite=None; Secure";

console.log('hello');
document.cookie = "userSecond=Den; SameSite=Strict; Secure";
document.cookie = "userDate=Bob; SameSite=Strict; Secure; expires=31 Oct 2024 19:37:47 GMT";

document.cookie = "userTime=Tim; SameSite=None; Secure; max-age=0";


console.log(document.cookie);

window.localStorage.setItem('UserMenuState', 'False');
window.localStorage['keyStorage']= 'Test text value';
window.localStorage.simpleKey = 'Simple value';

let todoList = [
  {todo:'Buy milk'},
  {todo:'Buy orange'}  
  
]
// window.localStorage.todoValue =todoList;
window.localStorage.todoValue = JSON.stringify(todoList);

console.log(window.localStorage.getItem('simpleKey'));
console.log(window.localStorage.userMenuState);
console.log(window.localStorage['keyStorage']);
console.log(window.localStorage.todoValue);
let storageValue = window.localStorage.todoValue;



let parseValue =JSON.parse( window.localStorage.todoValue);

console.log(parseValue);
todoList.push({todo: 'Buy apple 2222'});
window.localStorage.todoValue = JSON.stringify(todoList);

// parseValue.forEach(element => {
//     console.log(element.todo);
    
// });
window.localStorage.removeItem('simpleKey');
window.localStorage.removeItem('keyStorage');

window.localStorage.clear();
