// alert('Hello World');

let favoriteFood = 'döner';
let foodNode = document.createTextNode('p');
foodNode.textContent = favoriteFood;

let body = document.querySelector('body');
body.appendChild(foodNode);
