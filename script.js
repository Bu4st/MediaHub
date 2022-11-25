

setInterval(spotify, 3000);
setInterval(nordvpn, 4000);
setInterval(netflix, 5000);
setInterval(disney, 6000);

function spotify() {
    let changer = document.getElementById('changer').innerHTML = 'spotify ';
}
function nordvpn() {
    let changer = document.getElementById('changer').innerHTML = 'nordvpn ';
}
function netflix() {
    let changer = document.getElementById('changer').innerHTML = 'netflix ';
}
function disney() {
    let changer = document.getElementById('changer').innerHTML = 'disney+ ';
}
// buttons


let netflix_action = document.getElementById('netflix')
let spotify_action = document.getElementById('spotify')
let nordvpn_action = document.getElementById('nordvpn')
let disney_action = document.getElementById('disney')
// sections

let netflix_section = document.getElementById('netflix-section');
let nordvpn_section = document.getElementById('nordvpn-section');
let spotify_section = document.getElementById('spotify-section');
let disney_section = document.getElementById('disney-section');

function clicknetflix() {
    netflix_section.style.display = "flex";
    spotify_section.style.display = "none";
    nordvpn_section.style.display = "none";
    disney_section.style.display = "none";
    nordvpn_action.classList.remove("active")
    spotify_action.classList.remove("active")
    disney_action.classList.remove("active")
    netflix_action.classList.add("active")
}
function clicknordvpn() {
    netflix_section.style.display = "none";
    spotify_section.style.display = "none";
    nordvpn_section.style.display = "flex";
    disney_section.style.display = "none";
    nordvpn_action.classList.add("active")
    spotify_action.classList.remove("active")
    disney_action.classList.remove("active")
    netflix_action.classList.remove("active")
}
function clickspotify() {
    netflix_section.style.display = "none";
    spotify_section.style.display = "flex";
    nordvpn_section.style.display = "none";
    disney_section.style.display = "none";
    nordvpn_action.classList.remove("active")
    spotify_action.classList.add("active")
    disney_action.classList.remove("active")
    netflix_action.classList.remove("active")
}
function clickdisney() {
    netflix_section.style.display = "none";
    spotify_section.style.display = "none";
    nordvpn_section.style.display = "none";
    disney_section.style.display = "flex";
    nordvpn_action.classList.remove("active")
    spotify_action.classList.remove("active")
    disney_action.classList.add("active")
    netflix_action.classList.remove("active")
}


netflix_action.addEventListener('click', clicknetflix)
nordvpn_action.addEventListener('click', clicknordvpn)
spotify_action.addEventListener('click', clickspotify)
disney_action.addEventListener('click', clickdisney)
