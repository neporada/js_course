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
    "age": 21
};
console.log(info.name, info.age);

var name = {
    name: info.name
};
console.log(name);

delete info.name;
console.log(name);

// #4
var customArray = [1,2,3];
console.log(customArray[2]);

customArray [2] = 0;
console.log(customArray[2]);

// #5
var student = 'Denis';
console.log(student);

student = 'Neporada';
console.log(student);

// #6
var complex = [];
complex[0] = "My name is:";
complex[1] = 7;
complex[2] = null;
complex[3] = info.name;
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