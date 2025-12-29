const navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0px";
  navLinks.style.transform = "scale(1)"
}

function hideMenu(){
    navLinks.style.right = "-200px"
    navLinks.style.transform = "scale(0)"
}