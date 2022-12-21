// define buttons
let btnHamMenu = document.getElementById("btn-ham-menu");
let btnCloseMenu = document.getElementById("btn-close-menu");

let navMenu = document.getElementById("navigation-menu");

let displayNavMenu = function() {
        // change navMenu style
        navMenu.style.display = 'inline-block';
        navMenu.style.marginTop = '5em';
        navMenu.style.width = '90%';
        navMenu.style.textAlign = 'center';
        navMenu.style.margin = 'auto';
        // swap buttons that are displayed
        btnHamMenu.style.display = 'none';
        btnCloseMenu.style.display = 'inline-block';
}
let hideNavMenu = function() {
        // change navMenu style
        navMenu.style.display = 'none';
        // swap buttons that are displayed
        btnCloseMenu.style.display = 'none';
        btnHamMenu.style.display = 'inline-block';
}

btnHamMenu.onclick = displayNavMenu;
btnCloseMenu.onclick = hideNavMenu;



