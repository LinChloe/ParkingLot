'use strict';

const switcher = document.querySelector('.btn');

var myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "image\twitch.jpg") {
        myImage.setAttribute("src", "image\twitch.jpg");
    } else {
        myImage.setAttribute("src", "image\logo.jpg");
    }
};



switcher.addEventListener('click', function () {
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
