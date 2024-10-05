const transactions = [
    { id: 1, type: 'income', amount: 100 },
    { id: 2, type: 'expense', amount: 50 },
    { id: 3, type: 'income', amount: 150 },
    { id: 4, type: 'expense', amount: 70 },
    { id: 5, type: 'income', amount: 200 },
  ];
//   Використайте фільтер для того щоб отримати 2 массива з income та expense  а також за допомогою .
//   Використайте map щоб зібрати всі дані в окремі масиви про  income та expense.  Та порахуйте сумарне значення для кожного з видів доходу чи роходу
// const incomeArr = [];
// const expense = [];
console.log(transactions);


 const incomeArr = transactions.filter((id)=>id.type==='income');
console.log(incomeArr);


const expenseArr = transactions.filter((id)=>id.type==='expense');
console.log(expenseArr);

const newIncomeArr = incomeArr.map((incomeArr)=>incomeArr.amount);
let sum = 0;
newIncomeArr.forEach((amount)=>{
    sum +=amount;
    return sum
} )

console.log(newIncomeArr);
console.log(sum);


const newExpenseArr =expenseArr.map((expenseArr)=>expenseArr.amount);
let sumResult = 0;
newExpenseArr.forEach((amount)=>{
    sumResult += amount;
    return sumResult;
} )
console.log(newExpenseArr);
console.log(sumResult);

