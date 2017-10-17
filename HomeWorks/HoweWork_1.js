// #1
var str = "Have a good day!";
console.log(str);

// #2
var age = 25;
console.log(age);

var age = undefined;

// #3
var info = {
    name: "Matte",
    "age": 21 // тут не обязательно в кавычках обьявлТь свойство age и скажу так - там где не нужно лучше обьявлять без или все делать в одном стиле
};
console.log(info.name, info.age);

var name = {
    name: info.name
};
console.log(name);
// тут нужно было просто обьявить переменную name и в нее записать значение из объекта то есть, потому что в твоем случае получаеться
// что оба они обьекты - значит сложные типы данных и значение передаеться по ссылке и при удалении info.name у тебя значение в 
// обоих случаях будет undefined (info.name === undefined && name.name === undefined)
var name = info.name;

delete info.name;
console.log(name);

// #4
var customArray = [1,2,3];
console.log(customArray[2]);

customArray [2] = 0; // тут просто нужно было перезаписать знаение всего массива на 0
console.log(customArray[2]);

// #5
var student = 'Denis';
console.log(student);

student = 'Neporada'; 
// не знаю что ожидалось в результате у тебя о в строке должна быть твое имя и фамилия а когда ты просто записал в нее свою 
// фамиилию имя затерлось в этом случае можно было использовать оператор +=: student += ' Neporada'; 
console.log(student);

// #6
var complex = [];
complex[0] = "My name is:";
complex[1] = 7;
complex[2] = null;
complex[3] = info.name; // нужно было записать значение всего массива а не конкретного элемента "name"
console.log(complex[2]);

// Task 7

var complexObj = {};

complexObj.name = "Denis";
complexObj.age = 33;
complexObj.friends = ["Andrew", "Vova", "Denis"];
complexObj.socLinks = {
    facebook: "neporada",
    googlePlus: "I don't use its"
};

var a = `My name is ${complexObj.name}. `;
var b = `I am ${complexObj.age} years old. `;
var c = `I have a lot of friends, but the best one is: ${complexObj.friends[0]}. `;
var d = `You can find me on facebook: ${complexObj.socLinks.facebook} or on goole groups: ${complexObj.socLinks.googlePlus}. `;

console.log(a + b + c + d);
