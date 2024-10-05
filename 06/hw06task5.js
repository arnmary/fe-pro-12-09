// Використайте map щоб отримати сумму кожно вкладено массиву
const arrayOfArrays = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9],
    [10]
  ];


 const summNumbers = arrayOfArrays.map((item)=>{

   let summResult=0;
   for (let i = 0; i < item.length; i++) {
       summResult+=item[i];
   }
   return summResult;
});

    console.log(arrayOfArrays);
     console.log(summNumbers);
    

     