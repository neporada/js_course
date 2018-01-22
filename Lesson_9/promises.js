var number = prompt("Please, put any number: ", 0)
var promise = new Promise (function (resolve, reject) {
    if (number % 2 === 0 ){
        resolve() ;
    } else { reject() }
});
promise.then( function (arg) {
    console.log('True', arg)
}, function (arg) {
    console.log('False', arg)
});

// second way
promise
    .then( function (arg) {
    console.log('True', arg)
    })
    .catch (function () {
    console.error('False', arg);
    });

// new

