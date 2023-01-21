'use strict'; //get more useful errors when you make mistakes

const switcher = document.querySelector('.btn'); //get button reference

switcher.addEventListener('click', function () {
    //toggle automatically adds or removes the themes
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});



