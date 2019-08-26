const menuToggleHamburger = document.getElementById("menuToggleHamburger");
const menuToggleX = document.getElementById("menuToggleX");
const navLink = document.querySelectorAll(".nav-link");

console.log(navLink)

menuToggleHamburger.addEventListener('click', event => {
    console.log("works")
    document.querySelector("nav").style.display = 'block';
    menuToggleHamburger.style.display = 'none';
    menuToggleX.style.display = 'block';
})

menuToggleX.addEventListener('click', event => {
    console.log("X works")
    document.querySelector("nav").style.display = 'none';
    menuToggleHamburger.style.display = 'block';
    menuToggleX.style.display = 'none';
})


// navLink.addEventListener('click', event =>{
//     document.querySelector("nav").style.display = 'none';
//     menuToggleHamburger.style.display = 'block';
//     menuToggleX.style.display = 'none';
// })

const closeNav = function(){
    console.log("X works")
    document.querySelector("nav").style.display = 'none';
    menuToggleHamburger.style.display = 'block';
    menuToggleX.style.display = 'none';
}