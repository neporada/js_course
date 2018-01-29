// Task 1

function call() {
    this.name = prompt("What is your name?");
}
//call();
var obj = {};
call(obj);
call(window);

console.log(obj.name);
console.log(window.name);

// Task 2

function findSum (number) {
    number = +prompt("Please, put any number in: ");
    var sum = 0;
    for (var i = 0; i <= number; i++) {
        sum += i;
    }
    console.log(sum);
}

findSum();

// Task 3

var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(function compare (a, b){
    return a.age - b.age;
});
console.log(people);
console.log(people[0].age);


//Task 4

var array = ['23', 'a', 'c', 'c', 'c', 'c', 'd', 'v', 'd', 'd', 'd',];

function unique (arr) {
    var uniqueArr = arr.filter(function (a, b){
        return arr.indexOf(a) === b;
    })
    console.log(uniqueArr)
}

unique(array);

