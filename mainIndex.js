
//Changing images bts for Problem 1
function p01Func() {
    document.getElementById("problem").innerHTML="<p>I'm looking for a type of pancake originating from Indian subcontinent, made from a fermented batter. It is somewhat similar to a creepe in appearance.</p>";
    document.getElementById("flowchart").setAttribute("src","images/dosa/dosaDesign.jpg");
    document.getElementById("flowchart").style.display = "none";
    document.getElementById("js").setAttribute("src","images/dosa/dosa1.jpg");
    document.getElementById("js").style.display = "none";
    document.getElementById("another").setAttribute("src","images/dosa/dosa2.jpg");
    document.getElementById("another").style.display = "none";
    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}


//Changing images bts for Problem 2     
function p02Func() {
    document.getElementById("problem").innerHTML="<p>I'm looking for an Iranian dish that consists of grilled chunks of chicken which are sometimes with bone and other times without bone. It's one of the most popular dishes of Iran. It is common to marinate the chunks in minced onion, lemon juice and sometimes saffron.</p>";
    document.getElementById("flowchart").setAttribute("src","images/jujeh/jujehDesign.jpg");
    document.getElementById("flowchart").style.display="none";
    document.getElementById("js").setAttribute("src","images/jujeh/jujeh1.jpg");
    document.getElementById("js").style.display="none";
    document.getElementById("another").setAttribute("src","images/jujeh/jujeh2.jpg");
    document.getElementById("another").style.display="none";
    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
}





//Switch image display on/off for CHECKBOX 1 i.e. DESIGN
function checkUncheck1(){
    if (document.getElementById("check1").checked==true) {
        
      document.getElementById("flowchart").style.display="inline";
    }
    else {
      document.getElementById("flowchart").style.display="none";
    }
}


//Switch image display on/off for CHECKBOX 2 i.e. SOLUTION 1
function checkUncheck2(){
    if (document.getElementById("check2").checked==true) {
      document.getElementById("js").style.display="inline";
    }
    else {
      document.getElementById("js").style.display="none";
    }
}


//Switch image display on/off for CHECKBOX 3 i.e. SOLUTION 2
function checkUncheck3() {
    if (document.getElementById("check3").checked==true) {
        document.getElementById("another").style.display="inline";
    }
    else {
        document.getElementById("another").style.display="none";
    }
}


//Zoom in/out function ***Needs a Scroll Bar***
function zoomIn() {
    document.getElementById("flowchart").style.width="200%";
}
function zoomOut() {
    document.getElementById("flowchart").style.width="100%";
}
