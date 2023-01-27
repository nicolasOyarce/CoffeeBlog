// QuerySelector
const heading = document.querySelector('.header__text h2') //return 0 o 1 element
//heading.textContent = 'New Heading';
console.log(heading);



// QuerySelectorAll
const link = document.querySelectorAll('.nav a');
link[0].textContent = 'About';
//link[0].classList.add('new-class');
//link[0].classList.remove('nav__link');



// GetElementById -- no longer in use
//const heading2 = document.getElementById('heading');
//console.log(heading2);




//Create a link
//const newLink = document.createElement('A')

//Link properties
//newLink.href = 'new-link.html';
//newLink.textContent = 'Link';
//newLink.classList.add('nav__link');


//Add to document
//const navegation = document.querySelector('.nav');
//navegation.appendChild(newLink);

//console.log(newLink);




//Event button
//console.log(1);

//window.addEventListener('load', function() { //load: wait for all js and html files to load
  //  console.log(2);
//})

//document.addEventListener('DOMContentLoaded', function() { //DOMContentLoaded: wait for html not css or image to load
    //console.log(3);
//})

//console.log(6);

//window.onscroll = function() {
  //  console.log('scrolling...');
//}



//Event click
//const btnSend = document.querySelector('.main--button');
//btnSend.addEventListener('click', function(event) {
   //console.log(event);
   //event.preventDefault();
  // console.log('Send Form');
//});




//Events of the Inputs and Textarea
const data = {
    name: '',
    email: '',
    message: ''
}

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

name.addEventListener('input', readText);
email.addEventListener('input', readText);
message.addEventListener('input', readText);


//Event submit
const form = document.querySelector('.form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    //Validate form
    const {name, email, message} = data;

    if (name === '' || email === '' || message === '') {
        viewAlert('Not all filed are completed', true);
        return;
    }

    //Send form
    viewAlert('Send to Successfully');
})


function readText(e) {
    //console.log(e.target.value);
    data[e.target.id] = e.target.value
    //console.log(data);
}

//View Alert
function viewAlert(message, error = null) {
    const alert = document.createElement('P');
    alert.textContent = message;

    if (error) {
        alert.classList.add('error');
    } else {
        alert.classList.add('send');
    }

    form.appendChild( alert );

    //
    setTimeout(() => {
        alert.remove();   
    }, 4000);
}

