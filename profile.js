var settingsmenu = document.querySelector(".settings-menu");

var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");

}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")=="light")
    {
        localStorage.setItem("theme","dark"); 
    }
    else
    {
        localStorage.setItem("theme","light");
    }

}

// // local storage to keep the dark mode after refresh------
// localStorage.setItem("theme","dark");


// // to read the value of local storage
// localStorage.getItem("theme");


if(localStorage.getItem("theme")=="light")
{
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark")
{
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme")
}
else
{
    localStorage.setItem("theme","light");
}