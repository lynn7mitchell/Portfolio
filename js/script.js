const menuToggleHamburger = document.getElementById("menuToggleHamburger");
const menuToggleX = document.getElementById("menuToggleX");
const nav = document.getElementById("nav");


menuToggleHamburger.addEventListener('click', event => {
    menuToggleHamburger.style.display = 'none';
    menuToggleX.style.display = 'block';
    nav.style.display = 'block'
})

menuToggleX.addEventListener('click', event => {
    document.getElementById("nav").style.display = 'none';
    menuToggleHamburger.style.display = 'block';
    menuToggleX.style.display = 'none';
})


const closeNav = function(){
    document.querySelector("nav").style.display = 'none';
    menuToggleHamburger.style.display = 'block';
    menuToggleX.style.display = 'none';
}