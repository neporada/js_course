var str = "foo"
str.charAt(0) // "f"
str.indexOf('f') // return 0

var str = promt("Enter your name");
str.indexOf("D")


var mails = prompt("Please type your e-mail: ");

if(mails.includes(";")){

} else {
    mails.split(";")
};
console.log(mails);


var fio = prompt("Enter your name, last name");
function fioTake() {
    return fio.split(" ")
};
var name = fioTake();
console.log("Hello user" + name[0] + ", your" + name[1])



function num2() {

    var num1 = prompt("Enter some value: ");

    if (!isNaN(num1)) {
        console.log(num1)
    } else {
        num2()
    }
}
num2();


var arr2 =[];
function arr1() {
    var arr = prompt("Enter number");
    if (!isNaN(arr)){
    arr2.push(arr)

    } else {
        console.log(arr2)
    }
    }
arr1();


function polindrome (){
    var word = prompt ("Enter any word to check is it polindrome or not: ");
    var word2 = word.split("");
    word2.reverse();
    word2.join("");
    if (word === word2) {
        console.log("It's polindrome")
    } else {
        console.log("It's not polindrome")
    }
}
polindrome();


var arr = [1,2,3];
arr.splice(0,1); // [2,3]
