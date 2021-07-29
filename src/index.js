window.onload = function() {

    //Hamburger
    addHamburgerClickHandler();
}

//Hamburger
const addHamburgerClickHandler = () => {
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.navigation').classList.toggle('visible');
        document.querySelector('.hamburger__line').classList.toggle('hamburger_active');
    })
}