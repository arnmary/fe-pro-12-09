let simpleSt = /js/;
let simpleYear = /\d\d\d\d/g;

let simpleStringSecond = new RegExp('hi');

let textPatern ='  1845 Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae maiores iusto 1734 quos repellendus alias nostrum nobis autem, soluta exercitationem 1994 odit. Animi ut ipsum veritatis? 2005 Dicta beatae ullam facere recusandae nisi!'


let searchIndex = textPatern.search(simpleYear);
console.log(`Search index ${searchIndex}`);


let newText = textPatern.replace(simpleYear,'!!!!');
console.log(newText);

