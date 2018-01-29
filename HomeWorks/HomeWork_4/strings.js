// Task 1

var inputString = 'aaa@bbb@ccc';

var newString = inputString.replace(/@/g, '!');

console.log(newString);

// Task 2

var inputString = "aaa bbb ccc";

var newString = inputString.substr(4, 3);

var newString = inputString.substring(4, 7);

var newString = inputString.slice(4,7);

console.log(newString);

// Task 3

var date = '2025-12-31';

var year = date.substr(0,4);
var months = date.substr(5, 2);
var day = date.substr(8, 2);

var newDate = day + '/' + months + '/' + year;
console.log(newDate);

// Task 4

var str = 'js';

var newStr = str.toUpperCase();
console.log(newStr);

// Task 5

var str = 'я учу javascript!';

var length = str.length;

console.log(length);

// Task 6

var str = 'Реализуйте обрезание длинного текста по следующему ';

function cutStr (newStr, n) {
    var newStr = str.length;
    if (newStr > 5) {
        return str[0] + '...';
    }
    console.log(newStr);
}
cutStr()

// Task 7

var str = 'я учу javascript!';
var arr = str.split(' ');
console.log(arr);

// Task 8

var arr = ['я', 'учу', 'javascript', '!'];
var str = arr.join('+');
console.log(str);

// Task 9

var str = 'я учу javascript!';

var upgrade = str[0].toUpperCase() + str.substr(1);

console.log(upgrade);

// Task 10

var str = 'я учу javascript!';

console.log("Data:", str);

var arr = str.split(" ");
for (var i = 0; i < arr.length; i++) {
    var s = arr[i].slice(0, 1);
    s = s.toUpperCase();
    arr[i] = arr[i].slice(1);
    arr[i] = s + arr[i];
}
var result = arr.join(" ");
console.log("Result:", result);

// Task 11

var str = 'var_test_text';

var arr = str.split('_');
for (var i = 1; i < arr.length; i++) {
    var upperFigureSecondWord = arr[1].slice(0, 1);
    upperFigureSecondWord = upperFigureSecondWord.toUpperCase();
    arr[1] = arr[1].slice(1);
    arr[1] = upperFigureSecondWord + arr[1];

    var upperFigureThirdWord = arr[1].slice(0, 1);
    upperFigureThirdWord = upperFigureThirdWord.toUpperCase();
    arr[2] = arr[2].slice(1);
    arr[2] = upperFigureSecondWord + arr[2];
}
var outcome = arr.join('');
console.log(outcome);

// Task 12

var inputStr ='12345678',
    reversedStrInArray = str.split('').reverse(),
    outputStr = '';

for (var i = 0; i <reversedStrInArray.length; i++) {
    if ((i +1) %3 === 0) {
    outputStr += (reversedStrInArray[i] + ' ')
    } else {
        outputStr += reversedStrInArray[i];
    }
}

console.log(a);