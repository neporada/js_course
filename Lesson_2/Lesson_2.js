var obj ={f:7};

var newObj = obj;

newObj.f =9;
obj =90;

console.log(obj.f);
console.log(newObj.f);

typeof(obj);

typeof(null); // object

var t =9;
var g = 8;
console.log(t-g); // 1

isNaN(5 * 'rr');

alert( 5 % 2 );

var first = 90;
var second = 11;

console.log((first % second)*3);

console.log(+t - +g); // 10

console.log(+t - -g); //90

var num1 = '5';
var num2 = 4;

console.log(+num1 * num2);
console.log(-num1 / num2);

var num = 10;

var foo1 = num++; //10
var foo2 = ++num; //12

console.log(foo1, foo2);

var t = 90;
var g = 10;

var q = 50;

console.log(q > g && q < t);
console.log(q > g || q < t);

var g = false || 4;
console.log(g);

!true; // = false
!false; // = true

a ? b : c;