// #1
var str = "Have a good day!";
console.log(str);

// #2
var age = 25;
console.log(age);

var age2;
console.log(age2);

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

// #7
var complexObj = {
    name: "Your_name",
    age: 33,
    friends = ["Add list of friend's names into this array"],
    soc_links = {
        facebook: null,
        googlePlus: null
    }
};




