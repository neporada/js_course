//Task 1

function isPal (){
    var word = prompt ("Enter any word to check is it polindrome or not: ");
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
var arr = [ 'rrrA', 'tobor', 'ekil', 'dooG', 'esoR' ];

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

    //askArgument = prompt('Please put any number:  ');
function callMeAgain() {
    var arr = [], askArgument,
        sum = 0;

    while (arr.length < 3) {
        askArgument = prompt('Please put any number:  ');

        if (!isNaN(askArgument)){
            arr.push(askArgument);
        } else {
        console.log('null');
        return true;
        }
    }
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    console.log(sum);
}
callMeAgain();
// function callMeAgain2 () {
//
//     if (arr.length < 3 && !isNaN(askArgument)) {
//         arr.push(askArgument);
//         askArgument = prompt('Please put any number:  ');
//         for (var i = 0; i < arr.length; i++) {
//             sum += arr[i];
//             console.log(sum);
//             }
//         } else {
//         console.log('null')
//     }
// }


