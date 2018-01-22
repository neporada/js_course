// Task 1

function isPrime(x) {
    if( x < 2 ) return false;
    for ( var i = 2; i < x; i++ ) {
        if( x % i == 0 )
            return false;
    }
    return true;
}

function outcomePrime(num1, num2) {
    for(var i = 0; i < num2; i++){
        if(isPrime(i)) console.log(i);
    }
}

outcomePrime(2,10);

// Task 2

var obj = {
    className: 'open menu'
}

function addClass(obj, cls) {
    var removeAllGaps = obj.className.trim(); // неуверен в нужности или как применить чтоб точно не было лишних пробелов, как в задании
    var listOfClasses = obj.className.split('');

    if( listOfClasses.indexOf(cls) === -1) {
        listOfClasses.push(cls);
    }
    obj.className = arr.join(' ');
}

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');

alert( obj.className );

// Task 3

var obj = {
    className: 'open menu'
};

function removeClass (obj, cls) {
    var arrClass = obj.className.split(" ");
    var index = arrClass.indexOf(cls);
    if(arrClass > -1) {
        arrClass.splice(index, 1);
        obj.className = arrClass.join(" ");
        removeClass(obj, cls);
    }

    return obj;
}
removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)

// next
var obj = {
    className: 'my menu menu'
};
removeClass(obj, 'menu');
alert( obj.className ); // 'my'

//Task 4

function askValue() {
    var askCollecter = [],
        askMore = true,
        ask;

   while(askMore){
        ask = prompt('Please put any data in: ');

        if (ask > 0 && !isNaN(ask)) {
            askCollecter.push(ask);
        }
        else {
            askMore = false;
            console.log(askCollecter);
        }

   }
}

askValue();

//Task 5

function fib(n) {
    var a = 1, b = 1, temp;

    while (n >= 0){
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }

    return b;
}
fib(44);

//Task 6

function stringReceiver() {
    var str = prompt('Please, type any sentence: ');

    if (str.length > 20) {
        console.log(str.slice(0,19) + "...")
    }
}
stringReceiver();

//Task 7

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 19
};

function bestWorker() {
    var  maxWork = 0,
         currentWork = 0,
         workerName;

    for(var userName in tasksCompleted) {
        currentWork = tasksCompleted[userName];

        if (maxWork < currentWork) {
            maxWork = currentWork;
            workerName = userName;
        }

   }

   console.log(workerName + " result is " + maxWork + ". Congratulations you're the best!")

}
bestWorker();
