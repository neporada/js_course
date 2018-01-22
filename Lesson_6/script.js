var a =  document.createElement('div');
var b = document.createElement('div');

document.body.appendChild(a);
document.body.appendChild(b);
a.setAttribute('id', 1);
b.setAttribute('id', 2);

a.appendChild(b);
b.innerHTML = ('Мы добавили эти элементы на страницу с помощью JS');
var n = prompt('Создайте таблицу. Сколько строк Вы бы хотели? Введите число: ');
var m = prompt('Сколько колонок Вы бы хотели? Введите число: ')

var table = document.createElement('table');
document.body.appendChild(table);


for ( var i =0; i < n; i++){
    var rows = document.createElement('tr');
    table.appendChild(rows);
    for ( var i =0; i < m; i++){
        var columns = document.createElement('td');
        rows.appendChild(columns)
    }
}


