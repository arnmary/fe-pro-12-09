    //HWtask#4  Написати програму яка буде конвертувати градуси по Цельсію в градуси по Фарінгейту:(F=C*9/5+32)

 let celsiusValue = prompt('Вкажіть температуру в градусах Цельсія');
 let firstNumbberValue = 9;
 let secondNumberValue = 5;
 let thirdNumberValue = 32;

 alert(`Температура по Фарінгейту буде дорівнювати : ${((celsiusValue*firstNumbberValue)/secondNumberValue)+ Number(thirdNumberValue) }`);