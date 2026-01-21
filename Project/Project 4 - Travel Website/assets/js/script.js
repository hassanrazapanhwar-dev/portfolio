const preloader = document.querySelector("[data-preloader]")

const story = document.querySelector(".story")
const openStory = document.querySelector(".hero-btn")
const closeStory = document.querySelector(".close-story")




window.addEventListener("load", ()=>{
    preloader.classList.add("remove")
})

/**
 *  Add Event On Multiple Elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

/**
 * Navbar Toggler for mobile
 */

const navbar = document.querySelector("[data-navbar]")
const navTogglers = document.querySelectorAll("[data-nav-toggler]")
const overlay = document.querySelector("[data-overlay]")

const toggleNav = function () {
    navbar.classList.toggle("active")
    overlay.classList.toggle("active")
    document.body.classList.toggle("nav-active")
}


addEventOnElements(navTogglers, "click", toggleNav)

const header = document.querySelector("[data-header]")

window.addEventListener("scroll", function () {
    header.classList[window.scrollY > 100 ? "add" : "remove"]("active")
})


const tripDialog = document.getElementById('dialog')
const tripButton = document.getElementById('tripButton')
const closeTripDialog = document.getElementById('closeTripDialog')
const submitTrip = document.getElementById("submitTrip")

submitTrip.addEventListener('click', ()=>{
    tripDialog.close();
})

closeTripDialog.addEventListener('click', ()=>{
    tripDialog.close();
})

tripButton.addEventListener('click', ()=>{
    tripDialog.showModal();
})


openStory.addEventListener('click', ()=>{
    story.classList.add('active')
})

closeStory.addEventListener('click', ()=>{
    story.classList.remove('active')
})