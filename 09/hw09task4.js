// 4) Створіть сторінку та підключіть до неї js
// 4.1) За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center

let mainEl =document.querySelector('main')
let header =document.createElement('header');
mainEl.appendChild(header);
header.style.padding ='50px';
header.style.backgroundColor= 'yellow';
header.style.textAlign ='center';


4.2
 const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
    // Додайте ще пункти меню за потреби
];
console.log(menuData);

// Створіть в хедері А теги з значенням з обєкта name  встановленим значенням в href з url.
// 4.3) Додайте тегам А що створені в header  атрибут target з властивістю _blank

for (const item of menuData) {
 let lincName = item.name;
let href = item .url;
let link = document.createElement('a');
link.innerHTML = lincName;
header.appendChild(link);

let url =document.createElement('href');
url.innerHTML = href;
link.append(url);
url.setAttribute('target','blank')



}


// 4.4)Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color

let sectionEl = document.createElement('section');
mainEl.appendChild(sectionEl);
sectionEl.style.display='flex';



for (let index = 0; index < 50 ;index++) {
    const multDiv = document.createElement('div');
    sectionEl.appendChild(multDiv);
    multDiv.style.borderRadius= '50px';
multDiv.style.width ='50px';
multDiv.style.height='50px';
multDiv.style.backgroundColor ='green'
multDiv.classList.add('circle-elemt')
}


// 4.5) доадайте всім стврореним 50 div елементам класс circle-elemt


