particlesJS.load('particles', 'js/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});

window.fitText(document.getElementById("company-logo-2"), 0.6);
window.fitText(document.getElementById("company-logo-1"), 0.6);

/**
 * Navbar
 */
var mobileMenuButton = document.querySelector('.navbar-mobile-button');
var mobileNavbar = document.querySelector('.mobile-navbar');
var mobileNavbarList = document.querySelectorAll('.mobile-navbar li');

mobileMenuButton.addEventListener('click', function() {
    if (mobileNavbar.classList.contains('hidden')) {
        mobileNavbar.classList.remove('hidden');
    } else {
        mobileNavbar.classList.add('hidden');
    }
});

for (var i = 0; i < mobileNavbarList.length; ++i) {
    mobileNavbarList[i].addEventListener('click', function() {
        mobileNavbar.classList.add('hidden');
    });
}

AOS.init({
    disable: window.innerWidth < 900
});

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity
});


/**
 * Contact form scripts
 */
var contactFormEls = document.querySelectorAll('.form-element .form-inp'),
    sendBtn = document.querySelector('.form-element input[type="submit"'),
    succesMsg = document.querySelector('.success-text');

sendBtn.addEventListener('click', function() {
    var formValid = 0;
    for (var i = 0; i < contactFormEls.length; ++i) {
        if (contactFormEls[i].checkValidity()) {
            formValid += 1;
        }
    }

    // show message has been sendBtn
    console.log('validity: ', formValid);
    if (formValid === 3) {
        succesMsg.style.color = 'black';
        setTimeout(function() {
            succesMsg.style.color = 'white';
        }, 1000);
    }
});
