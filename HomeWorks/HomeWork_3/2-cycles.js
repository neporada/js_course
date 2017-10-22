// Task 1

for (i=1; i<=50; i++){
    console.log(i);
}

// Task 2

var arr = [1, 2, 3, 4, 5];
for (i=0; i< arr.length; i++) {
    console.log(arr[i]);
}

// Task 3

var arr = [2, 3 ,4, 5];
var result = 1;
for (i = 0; i < arr.length; i++) {
    result *= arr[i];
}
console.log(result);

// Task 4

var obj = {
    Minsk: "Belarus",
    Moscow: "Russia",
    Kyiv: "Ukraine"
};

for ( n in obj ) {
    console.log( `${n} - это ${obj[n]}.` );
}

// Task 5

var n = 1000;
var num;

for (num = 0; n > 50; num++) {
    n /= 2;
}

console.log( n );
console.log( num );

// Task 6

var arr = [2, 5, 9 ,15, 0, 4];
for ( i = 0; i < arr.length; i++ ) {
    if ( arr[i] > 3 && arr[i] < 10 ) {
        console.log( arr[i] );
    }
}

// Task 7

var arr = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var date = new Date();

var month = date.getMonth;

for ( i = 0; i < arr.length; i++ ) {
    if (i != month) {
        console.log(arr[i])
    } else {
        console.log('%c', 'font: bold;', arr[i])
    }
} // Что я делаю ни так чтобы выделить жирным текущий месяц?
