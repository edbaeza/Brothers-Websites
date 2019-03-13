var currentTheme = localStorage.getItem("theme");
console.log("currentTheme: "+currentTheme);

function init(){
    console.log("Calling init");
    var body = document.getElementById("mainbody");
    var themeButton = document.getElementById("toggletheme");
    if(currentTheme == "light_theme"){
        body.className = "light_theme";
        themeButton.innerHTML = "Dark Mode";
    }
    else{
        body.className = "dark_theme";
        themeButton.innerHTML = "Light Mode";
    }
}

function changeTheme(){
    // changes the theme to either light or dark depending on current state
    // save the current theme to localStorage so theme stays persistent
    var body = document.getElementById('mainbody');
    var themeButton = document.getElementById("toggletheme");
    if(body.className == "light_theme"){
        body.className = "dark_theme"
        themeButton.innerHTML = "Light Mode";
        localStorage.setItem("theme", "dark_theme");
    }
    else{
        body.className = "light_theme";
        themeButton.innerHTML = "Dark Mode";
        localStorage.setItem("theme", "light_theme");
    }
}