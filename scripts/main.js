var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var img = document.querySelector('img');
var clicked = false;

img.onmouseover = function() {
    if (!clicked) myHeading.textContent = 'Hovering.';
}

img.onmouseout = function() {
    myHeading.textContent = 'Not hovering.';
    clicked = false;
    if (img.getAttribute('src') === 'images/firefox-clicked.jpg')
        img.setAttribute('src', 'images/firefox-icon.jpg');
}

img.onclick = function() {
    myHeading.textContent = 'Stop poking me, perv!';
    clicked = true;
    
    if (img.getAttribute('src') === 'images/firefox-icon.jpg')
        img.setAttribute('src', 'images/firefox-clicked.jpg');
}

var myBtn = document.querySelector('button');

/*function setUserName() {
    var myName = window.prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Greetings, ' + myName);
}





if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Greetings, ' + storedName;
}*/


