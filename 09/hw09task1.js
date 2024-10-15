let bodyEl =document.querySelector('.container');
let table = document.createElement('table');
bodyEl.appendChild(table);

let theadEl = document.createElement('thead');
table.appendChild(theadEl);

let rowEl1 = document.createElement('tr');
theadEl.appendChild(rowEl1);

let cellEl1 = document.createElement('th');
cellEl1.innerHTML = 'title';
rowEl1.appendChild(cellEl1);

let cellEl2 =document.createElement('th');
cellEl2.innerHTML = 'year';
rowEl1.appendChild(cellEl2);

let cellEl3 =document.createElement('th');
cellEl3.innerHTML = 'rating';
rowEl1.appendChild(cellEl3);


const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];
console.log(booksArray);

let myTable = document.querySelector('table');
console.log(myTable);

for (const bookValue of booksArray) {
    let tableRow = document.createElement('tr');
console.log(tableRow);


    let titleValue = document.createElement('td');
    titleValue.innerHTML = bookValue.title;
      tableRow.appendChild(titleValue);
   
  let yearValue = document.createElement('td');
  yearValue.innerHTML = bookValue.year;
  tableRow.appendChild(yearValue);

  let ratingValue =document.createElement('td');
  ratingValue.innerHTML = bookValue.rating;
  tableRow.appendChild(ratingValue);



myTable.appendChild(tableRow)
console.log(myTable);

let allStyle =[titleValue,yearValue,ratingValue]
allStyle.forEach(value => {
    value.style.border='2px,solid,blueviolet';
    value.style.padding='20px';
    value.style.textAlign='center';
    value.style.color = 'darkblue'


});
titleValue.style.textAlign ='left'




}



