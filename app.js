const navButton = document.getElementById('nav__button');
const navList = document.querySelector('.nav__list');

// Nav bar button on mobile devices
navButton.addEventListener('click', function () {
    navList.classList.toggle('nav__list--visible');
    // navList.classList.toggle('nav__list--hidden');
});

var navHome = document.getElementById('home');
var navAboutUs = document.getElementById('aboutus');
var navServices = document.getElementById('services');
var navContact = document.getElementById('contact');

const headerHero = document.querySelector('header.hero');
const sectAboutUs = document.querySelector('section.about')
const sectServices = document.querySelector('section.services')
const sectContact = document.querySelector('section.contact')

var posHeaderHero = headerHero.getBoundingClientRect()
var posSectAboutUs = sectAboutUs.getBoundingClientRect()
var posSectServices = sectServices.getBoundingClientRect()
var posSectContact = sectContact.getBoundingClientRect()
var bodyScrollTop = (document.documentElement.scrollTop || document.body.scrollTop )
bodyScrollTop =0;

window.addEventListener('scroll', function (e) {
    // var nav = document.getElementById('nav');
    var bodyScrollTop = (document.documentElement.scrollTop || document.body.scrollTop);
    // Home
    if (bodyScrollTop > (posHeaderHero.y)) {
        navHome.classList.add('nav-colored');
        navHome.classList.remove('nav-transparent');

        navAboutUs.classList.add('nav-transparent');
        navAboutUs.classList.remove('nav-colored');

        navServices.classList.add('nav-transparent');
        navServices.classList.remove('nav-colored');

        navContact.classList.add('nav-transparent');
        navContact.classList.remove('nav-colored');
        // posHeaderHero.classList.remove('nav-transparent');
    } // AboutUs
    if (bodyScrollTop > posSectAboutUs.y) {
        navHome.classList.add('nav-transparent');
        navHome.classList.remove('nav-colored');

        navAboutUs.classList.add('nav-colored');
        navAboutUs.classList.remove('nav-transparent');

        navServices.classList.add('nav-transparent');
        navServices.classList.remove('nav-colored');

        navContact.classList.add('nav-transparent');
        navContact.classList.remove('nav-colored');
        // posHeaderHero.classList.remove('nav-transparent');
    } // Services
    if (bodyScrollTop > posSectServices.y) {
        navHome.classList.add('nav-transparent');
        navHome.classList.remove('nav-colored');

        navAboutUs.classList.add('nav-transparent');
        navAboutUs.classList.remove('nav-colored');

        navServices.classList.add('nav-colored');
        navServices.classList.remove('nav-transparent');

        navContact.classList.add('nav-transparent');
        navContact.classList.remove('nav-colored');
        // posHeaderHero.classList.remove('nav-transparent');
    }
    // Contact
    if (bodyScrollTop > posSectContact.y) {
        navHome.classList.add('nav-transparent');
        navHome.classList.remove('nav-colored');

        navAboutUs.classList.add('nav-transparent');
        navAboutUs.classList.remove('nav-colored');

        navServices.classList.add('nav-transparent');
        navServices.classList.remove('nav-colored');

        navContact.classList.add('nav-colored');
        navContact.classList.remove('nav-transparent');
        // posHeaderHero.classList.remove('nav-transparent');
    }
    if (bodyScrollTop <= 0) {
        navHome.classList.add('nav-transparent');
        navHome.classList.remove('nav-colored');

        navAboutUs.classList.add('nav-transparent');
        navAboutUs.classList.remove('nav-colored');

        navServices.classList.add('nav-transparent');
        navServices.classList.remove('nav-colored');

        navContact.classList.add('nav-transparent');
        navContact.classList.remove('nav-colored');
    }
});