// Hamburger for small devices
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-list");
    navBar.classList.toggle("active");
};


//User
user = document.querySelector(".user");
user.onclick = function () {
    userPic = document.querySelector(".user-dropdown");
    userPic.classList.toggle("userinfo");
};


//Navigation bar effects on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


// Autotype
var typed = new Typed(".auto-type", {
    strings: [".", ".", "."],
    typeSpeed: 90,
    backSpeed: 90,
    loop: true
});


// // Google Map
// function initMap() {
//     // Create a new map instance
//     const map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: 0, lng: 0 }, // Set the initial center of the map (latitude and longitude) coordinates
//         zoom: 12, // Set the initial zoom level
//     });

//     // You can add more customization and functionality here
// };

// Hamburger for small devices
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    navBar = document.querySelector(".nav-list");
    navBar.classList.toggle("active")
};



