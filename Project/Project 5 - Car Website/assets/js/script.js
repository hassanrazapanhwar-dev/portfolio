'use strict';



/** 
  * #PRELOADER
  **/

window.addEventListener('load', ()=> {
  const preloader = document.querySelector("[data-preloader]")
  preloader.classList.toggle("active")
})




/** 
  * #MOBILE NAVBAR TOGGLE
  **/

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener('click', function() { 
    navbar.classList.toggle('active');
    this.classList.toggle('active');
})