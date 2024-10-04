

//onload animation for the Project X link
window.onload = function() {
    document.getElementById("linker").classList.add("visible");
}




//EventListener for the dropdownmenu "menuFirst"
const hoverMenuFirst = document.getElementById("menufirst");

hoverMenuFirst.addEventListener('mouseenter', function() {
    document.getElementById("aboutMe2").style.display = "block";
} );

hoverMenuFirst.addEventListener('mouseleave', function() {
    document.getElementById("aboutMe2").style.display = "none";
} );
