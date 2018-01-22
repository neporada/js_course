var addNumber = prompt('Put number of li in dom: ');

for ( var i =0; i < addNumber; i++) {
    var addN = document.createElement('li');
    document.querySelector('ul').appendChild(addN);
    addN.innerHTML = '4'
}

// document.querySelector('ul');