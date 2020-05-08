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
    if (formValid === 3) {
        succesMsg.style.color = 'black';
        setTimeout(function() {
            succesMsg.style.color = 'white';
        }, 1000);
    }
});
