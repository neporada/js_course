function getName() {
    console
}

var person = {
    age: 33,
    name: "Denis",
    getData: function () {
        var person = this.age + this.name;
        return person;

    }
}



function getData (str) {
    return prompt(str)
}




function makeCounterOf(number) {
    var counter = 0;
    return function () {
        return counter += number
    }
}