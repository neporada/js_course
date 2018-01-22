for (i=0; document.body.children.length<1; i++){
    console.log(document.body.children[i])
}

// getElement... getElementById, getElementsByTagName
// querySelector...

document.querySelector('') // return only first element
document.querySelectorAll('') // return only all element


document.querySelector('.mv-hide');

document.querySelector('.mv-hide').closest

document.querySelector('mv-hide')
document.body.innerHTML = '<div> это элемент div';

document.body.insertBefore( divEl2, document.querySelector('.mv-hide'));