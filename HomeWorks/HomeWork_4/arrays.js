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
    arr2 =  [1, 2, 3, 4],
    sum = [];

function arraysSum () {
var summ;
    for ( var i = 0; i < arr1.length || i < arr2.length; i++) {
        summ = 0;
        if (arr1[i] != undefined){
            summ = summ+arr1[i];
        }
        if (arr2[i] != undefined){
            summ += arr2[i];
        }
        sum.push(summ);
    }
}
arraysSum(arr1, arr2);
console.log(sum);

// Task 12

function deleteItemFromArray (arr, x) {
    var filtredArray = arr.filter(function (y) {
        return (y !== 3);
    });
    console.log(filtredArray);
}

deleteItemFromArray([1, 2, 3, 4,3,3], 3);

// Task 13

function intersection (x, y, z) {
    var newArr =[];

    for (var i = 0; i <x.length; i++) {
        if (y.indexOf(x[i]) !== -1) {
            if (z.indexOf(x[i]) !== -1) {
            newArr.push(x[i]);
            }
        }
    }

    console.log(newArr)
}
intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);

// Task 14

var arr = [2, 3, 1, 4];

function modifiedArr (origArr) {
   var newArr = [],
       counter;

    for (var i = 0; i <origArr.length; i++) {
       counter = origArr[i];

       for ( var j = 0; j < counter; j++) {
            newArr.push(counter);
       }

    }

    return newArr;
}


arr = modifiedArr(arr);


// Task 15

function additionalZero (arr) {

    for (var i = 0; i < 10; i++ ) {
        arr.push(0)
    }
    console.log([1,2,3])
};

additionalZero();

// Task 16

var arr = [1, -5, 10, 2, -10, 23, 45];

function sortArr (array) {
    array.sort()
}


var negative = arr.filter(function (oneElement) {
    return oneElement < 0;
});

console.log('Negative numbers: ' + negative.join(', '));



console.log('First three min elements of array are: ' + arr[0] + ', ' + arr[1] + ', ' + arr[2] + '.');



