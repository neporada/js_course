// Task 3
var formSeach = document.getElementById('form');
console.log(formSeach);

// Task 4

console.log(document.getElementById('form#main').children.length);

// Task 5

var element = document.getElementById('main');
var parent = element.parentElement;
console.log(parent.tagName === 'body');

// Task 6

document.body.style.backgroundColor = 'green';

// Task 7

document.body.style.backgroundColor = 'black';
document.body.style.color = 'green';

// Task 8

var body = document.body;
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';

console.log(document.body.style.backgroundColor + ', ' + document.body.style.color );

console.log(getComputedStyle(body).backgroundColor + ', ' + getComputedStyle(body).color);

//// console.log(getComputedStyle(body).backgroundColor + ', ' + getComputedStyle(body).color);

