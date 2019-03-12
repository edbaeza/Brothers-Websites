var currentTheme = localStorage.getItem("theme");
console.log("currentTheme: "+currentTheme);

function init(){
    console.log("Calling init");
    var body = document.getElementById("mainbody");
    if(currentTheme == "light_theme"){
        body.className = "light_theme";
    }
    else{
        body.className = "dark_theme";
    }
}

function changeTheme(){
    // changes the theme to either light or dark depending on current state
    // save the current theme to localStorage so theme stays persistent
    var body = document.getElementById('mainbody');
    if(body.className == "light_theme"){
        body.className = "dark_theme"
        localStorage.setItem("theme", "dark_theme");
    }
    else{
        body.className = "light_theme";
        localStorage.setItem("theme", "light_theme");
    }
}