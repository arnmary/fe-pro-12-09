// Завдання 4:
// Створіть канвас і за допомогою JavaScript малюйте на ньому 3 прямокутники  які пересікаються. Використовуйте метод fillRect для цього.
// https://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html#fillrect-x-y-w-h

const canvas =document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const ctx2 = canvas.getContext('2d');
const ctx3 = canvas.getContext('2d');


ctx.fillStyle ="green";
ctx.fillRect(30,20,50,50);

ctx2.fillStyle ="yellow";
ctx2.fillRect(50,50,50,50);

ctx3.fillStyle ="orange";
ctx3.fillRect(0,0,50,50);