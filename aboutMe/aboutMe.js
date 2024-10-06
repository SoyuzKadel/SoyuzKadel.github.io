

//onload animation for the Project X link
window.onload = function() {
    document.getElementById("linker").classList.add("visible");
}




//Menu Drop Down OnClick
x = 0;
function menuOnClick2() {
    if (x%2 == 0) {
        document.getElementById("menufirst").removeAttribute("onmouseleave");
        document.getElementById("aboutMe2").style.display="inline";
    }else {
        document.getElementById("menufirst").setAttribute("onmouseleave", "mouseLeaves()");
    }
    x = x + 1;
}
function mouseLeaves() {
    document.getElementById("aboutMe2").style.display="none";
}


function mouseEnters() {
    document.getElementById("aboutMe2").style.display="inline";
}
