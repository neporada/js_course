// 1 task

function getName(x, y) {
    var name = prompt("Type your name, please: ");
    alert(`Hello, ${name} `);
}

getName();

// 2 task

function double(x) {
    return x * 2
}

double(6);

// 3 task

function range(x, y) {

    var result = 0;

    if (x < y) {
        for (var i = x; i <= y; i++) {
            result += i;
        }
    } else if (x > y) {
        for (var j = x; j >= y; j--) {
            result += j;
        }
    } else {
        result += x;
    }

    return result;
}

range(1, 3);

// 4 task


// 5 task

function oddOrEven(x){
     if (x % 2 === 0) {
         return true;
     }
     else {
         return false;
     }
}

oddOrEven();

// 6 task

// 7 task

function guess() {
     do {
         var a = +prompt("Guess a number: ")
     }
     while (a !== 9);
}
guess();