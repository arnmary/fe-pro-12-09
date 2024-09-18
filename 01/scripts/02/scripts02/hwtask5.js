 //HWtask#5 Написати програму яка буде вичислювати об'єм циліндру : (V= Pi*R^2*h)


 let radiusValue = prompt('Вкажіть значення радіуса');
 let heightValue = prompt('Вкажіть значення висоти');
 let firstConstanta = 3.14;
 let secondConstanta = 2;

 alert(`Об'єм цилінддру буде дорівнювати : ${(firstConstanta *( radiusValue ** secondConstanta) * heightValue ) }`);