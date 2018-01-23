//Task 1

function isPal() {
    var word = prompt("Enter any word to check is it polindrome or not: ");
    var reverseWord = word.split("");
    reverseWord.reverse();
    reverseWord.join("");
    if (word === reverseWord) {
        console.log("It's polindrome")
    } else {
        console.log("It's not polindrome")
    }
}

isPal();

//Task 2

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
var cleanerArr = {};

function anClean(arr) {
    for (i = 0; i < arr.length; i++) {
        var sorted = arr[i].toLowerCase().split('').sort().join('');
        cleanerArr[sorted] = arr[i];
    }
    for (s in cleanerArr) {
        console.log(cleanerArr[s]);
    }
}

anClean(arr);

//Task 3
var arr = ['rrrA', 'tobor', 'ekil', 'dooG', 'esoR'];

function splitArrrayToString() {
    var toStr = arr.join(' ').split('').reverse().join('');
    console.log(toStr);
}

splitArrrayToString();

//Task 4
sum = 0;

function getSum(n) {
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}

getSum(100);

//

sum = 0;

function getSum(n) {
    for (i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    console.log(sum);
}

getSum(100);

//Task 5

function callMeAgain() {
    var arr = [],
        askArgument,
        total = 0;

    while (arr.length < 3) {
        askArgument = +prompt('Please put any number:  ');

        if (!isNaN(askArgument)) {
            arr.push(askArgument);

        } else {
            console.log('null');
            return true;
        }
    }
    for (var i = 0; i < arr.length; total += arr[i++]) ;
    console.log(total);
}

callMeAgain();

// Task 6
var arr = ['Max', 'Den', 'Vladimer'];

function callMeAgain() {
    divide = arr.sort();
    divide = arr.join(',');
    console.log(divide);
}

callMeAgain(arr);

// Task 7

var arr = [
    {name: "L1", age: 45},
    {name: "L2", age: 20},
    {name: "L3", age: 10},
    {name: "L4", age: 78},
    {name: "L5", age: 41},
    {name: "L6", age: 10}
];

function ageSort() {
    age = arr.sort(function (current, next) {
        return current.age - next.age;
    });
    console.log(age);
}

ageSort(arr);

// Task 8

var people = [];


step();

function step () {
    var record = askNameAndAge();

    if (checkExist(people, record) === false) {
        people.push(record);
        step();
    }
}

function checkExist (arr , findElement) {
    var exist = false;

    for (var i = 0; i < arr.length; i++){
        if ( findElement.name === arr[i].name && findElement.age === arr[i].age){
            console.log("Такой пользователь уже существует");
            exist = true;
        }
    }
    return exist;
}

function askNameAndAge() {
    var name, age;

    name = prompt("Please, type your name: ");

    age = prompt("Please, type your age: ");
    age = parseInt(age);

    return {
        name: name,
        age: age
    };
}

// Task 9

function calculateNumbersAmount () {
    var numbers = [23, 12, 245, 34225, 2], dividedElementsArray, counter = 0;

    str = numbers.join('');

    dividedElementsArray = str.match(/2/g);

    console.log(dividedElementsArray.length)
}
calculateNumbersAmount();

// Task 10

var arr =  ['1', '2', '3', '4', '5', '6'],
    newArray = [];

function changeArr (){
    for ( var i = 0; i < arr.length/2; i++) {
        newArray.push(arr[i] + arr[arr.length - (i + 1)])
    }
    return newArray.join('-');
}
changeArr();


// Task 11

var arr1 =  [1, 2, 3, 4, 5, 6],
    arr2 =  [1, 2, 3, 4, ],
    sum = [];

function arraysSum () {

    for ( var i = 0; i < arr1.lenhgt || i < arr2.length; i++) {
       sum.push(arr1[i] + arr2[i]);
    }
}
arraysSum(arr1, arr2);
console.log(sum);

// Task 12

