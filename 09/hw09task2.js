//2) пройдіть по масиву і зробіть заповнення таблиці даними з масива
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




















// let firstTitle = document.querySelector('.first-title');
// console.log(firstTitle);
// firstTitle.innerHTML='Пригоди Аліси в Країні Див';
// firstTitle.style.border ='2px, solid ,black';

// let firstYearValue =document.querySelector('.first-year');
// firstYearValue.innerHTML='1865';
// firstYearValue.style.border ='2px, solid ,black';


// let firstRatingValue = document.querySelector('.first-rat');
// firstRatingValue.innerHTML = '4,5';
// firstRatingValue.style.border='2px, solid ,black';



// let secondTitle = document.querySelector('.second-title')
// console.log(secondTitle);
// secondTitle.innerHTML='1984';
// secondTitle.style.border ='2px, solid, black';

// let secondYearValue =document.querySelector('.second-year');
// secondYearValue.innerHTML='1949';
// secondYearValue.style.border ='2px, solid, black';


// let secondRatingValue =document.querySelector('.second-rat');
// secondRatingValue.innerHTML = ' 4.8';
// secondRatingValue.style.border='2px,solid,black';

// let thirdTitle =document.querySelector('.third-title');
// thirdTitle.innerHTML = 'Гаррі Поттер і філософський камінь'
// thirdTitle.style.border = '2px, solid, black';

// let thirdYearValue =document.querySelector('.third-year');
// thirdYearValue.innerHTML ='1997';
// thirdYearValue.style.border ='2px, solid, black';

// let thirdRatingValue =document.querySelector('.third-rat');
// thirdRatingValue.innerHTML ='4.7';
// thirdRatingValue.style.border ='2px, solid, black';


// let [...styleTag] = document.querySelectorAll( 'th');
// console.log(styleTag);
// // styleTag.style.border ='2px, solid, black';