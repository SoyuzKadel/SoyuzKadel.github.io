

//onload animation for the Project X link
window.onload = function() {
    document.getElementById("linker").classList.add("visible");
}




//EventListener for the dropdownmenu "menuFirst"
const menuButton = document.getElementById("menufirst");

menuButton.addEventListener('mouseenter', function() {
    document.getElementById("aboutMe2").style.display = "block";
} );

menuButton.addEventListener('mouseleave', function() {
    document.getElementById("aboutMe2").style.display = "none";
} );
