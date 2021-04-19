d1 = document.getElementById("drop1").value;
function next(){
    window.location = "second.html";
}
function sethead(){
    console.log("FUNCTION LOADED!!")
    if(dropdown1 == "Mustache"){
        document.getElementById("heading").innerHTML = "You Chose Mustache!";
        document.getElementById("heading").style.color = "magenta";
    }
    else {
        document.getElementById("heading").innerHTML = "You Chose Lipstick!";
    }

}
function save1(){
    save('filter.png');
}