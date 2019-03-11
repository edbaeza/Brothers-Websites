var currentTheme = localStorage.getItem("theme");
console.log(currentTheme);

window.onload = function(){
    init();
}


function init(){
    // will make sure the theme is correct when user reloads or revisits the page 
    const body = document.querySelector('body');
    
    if(currentTheme == "light_theme"){
        if(body.classList.contains('dark_theme')){
            document.getElementById("mainbody").setAttribute("class", "light_theme");
        }
    }
    if(currentTheme == "dark_theme"){
        if(body.classList.contains('light_theme')){
            document.getElementById("mainbody").setAttribute("class", "dark_theme");
        }
    }
    
}

function changeTheme(){
    // changes the theme to either light or dark depending on current state
    // save the current theme to localStorage so theme stays persistent
    const body = document.querySelector('body');
    
    if (body.classList.contains('light_theme')) {
        document.getElementById("mainbody").setAttribute("class", "dark_theme");
        localStorage.setItem("theme", "dark_theme");
    }
    else {
        document.getElementById("mainbody").setAttribute("class", "light_theme");
        localStorage.setItem("theme", "light_theme");
    }

}