const menuToggleHamburger = document.getElementById("menuToggleHamburger")
const menuToggleX = document.getElementById("menuToggleX")

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