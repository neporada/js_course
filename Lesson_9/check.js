document.querySelector('button').addEventListener('click', function () {
    var name = document.getElementById('text');
    var checkbox = document.getElementById('checkbox')
})

Promise
    .then(function (){
        var nameVer = name.value;

        if (nameVer.length !== 0 ){
            return Promise.resolve(nameVer)
        } else return Promise.reject(false)
    } )
    .then(function () {
    var checkboxVer = checkbox.value;
    if (checkboxVer && !isNaN(+checkboxVer)){
        return Promise.resolve(checkbox)
    } else return Promise.reject(false))
    .catch(function () {
    alert("Wrong, please try again");

    age.value = '';
    name.value = '';

