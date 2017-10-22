/* 1 задание

Если переменная a равна нулю, то выведите 'Верно!', иначе выведите 'Неверно!'. Проверьте работу скрипта при a, равном 1, 0, -3. */

var a = prompt("Введите любое значение: ");
if ( a === 0 ) {
    console.log("Верно!");
}
else {
    console.log("Неверно!");
}

/*  2 задание

Если переменная a равна 'test', то выведите 'Верно!', иначе выведите 'Неверно!'. Проверьте работу скрипта при a, равном 'test', 'тест', 3. */

var a = prompt('Введите слово "test": ');
if ( a === 'test' ) {
    alert('Верно!');
} else {
    alert('Неверно!');
}

/* 3 задание

Если переменная test равна true, то выведите 'Верно!', иначе выведите 'Неверно!'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной. */

var test = true;
var askTrueOrNot = prompt('Введите "true" или "false": ')
var askTrueOrNot = test;
if ( test === true ) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}
// второй вариант

test === true ? console.log('Верно!'): console.log('Неверно!');


/* 4 задание

Создайте переменные a и b. Просуммируйте их, а результат запишите в переменную result. Если result больше 5, то присвойте переменной result значение 5. Если же она меньше 5-ти - то умножьте ее на 10. Выведите на экран значение переменной result. Проверьте работу скрипта при a и b, равных 2 и 5, 3 и 1. */

var a = prompt("Введите значение переменной а(2 или 3, например): ");
var b = prompt("Введите значение переменной b(5 или 1, например): ");

var result = a + b;

if ( result > 5 ) {
    result = 5;
} else if ( result < 5 ) {
    result *= 10;
}

console.log(result);

/* 5 задание

Если переменная a равна нулю или равна двум, то поделите ее на 10, иначе прибавьте к ней 7 и выведите ее на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2. */

var a = prompt("Введите значение переменной а: ");

if ((a === 0) || (a === 2)) {
    a /= 10;
} else {
    a += 7;
}

console.log(a);

/* 6 задание

Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите 'Неверно!'. Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5. */

var a = prompt("Введите значение переменной а(1, 0 или 3, например): ");
var b = prompt("Введите значение переменной b(3, 6, или 5, например): ");

if ( a <= 1 && b >= 3 ) {
    console.log(a + b);
} else {
    console.log("Неверно!");
}

/* 7 задание

Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-х и меньше 14-ти, то увеличьте a на 2, иначе прибавьте к a число 5. Выведите новое значение перенной на экран. Проверьте работу скрипта самостоятельно. */

var a = prompt("Введите значение переменной а: ");
var b = prompt("Введите значение переменной b: ");

if (a > 2 && a < 11 || b >= 6 && b < 14) {
    a += 2;
} else {
    a += 5;
}

alert(a);

/* 8 задание

Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'лето' и так далее. Решите задачу через switch-case. */

var num = +prompt("Type season number from 1 to 4: ");
switch (num){
    case 1:
        result = "Winter";
        break;
    case 2:
        result = "Sping";
        break;
    case 3:
        result = "Summer";
        break;
    case 4:
        result = "Autumn";
        break;
    default:
        result = "Incorrect number, try again";
        break;
}
console.log(result);

/*  9 задание

Переменная lang может принимать три значения: 'ru', 'en', 'de'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, если имеет значение 'en' – то на английском, если 'de' – на немецком. Решите задачу через 3 if, через switch-case и через многомерный массив. */

var lang = prompt("Please, choose your language & type its from ru, en or de: ");
var arr = [];
var arrRu = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вск'];
var arrEn = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
var arrDe = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

if ( lang === 'ru' ) {
    arr = arrRu;

} else if ( lang === 'en' ) {
    arr = arrEn;

} else if ( lang === 'de' ) {
    arr = arrDe;
} else {
    alert("Choose right language, ru or en or de only!")
}

console.log(arr);

// второй варик:

var lang = prompt("Please, choose your language & type its from ru, en or de: ");
var arr = [];
var arrRu = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вск'];
var arrEn = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
var arrDe = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];


switch (lang) {
    case 'ru':
        arr = arrRu;
        break;
    case 'en':
        arr = arrEn;
        break;
    case 'de':
        arr = arrDe;
        break;
    default:
        alert("Choose right language, ru or en or de only!");
}

console.log(arr);

// третий варик:

var lang = prompt("Please, choose your language & type its from ru, en or de: ");
var arr = [];
var arr1 = [['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вск'],
    ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
];

if ( lang === 'ru' ) {
    arr = arr[0];

} else if ( lang === 'en' ) {
    arr = arr[1];

} else if ( lang === 'de' ) {
    arr = arr[2];
} else {
    alert("Choose right language, ru or en or de only!")
}

console.log();