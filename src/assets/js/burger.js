let iconBurger = document.querySelector('.burger');
let navBody= document.querySelector('.nav__body');
let page = document.getElementById('page');
let body = document.body;
let menuArrows = document.querySelectorAll('.menu__arrow');

//  Стрелочка в подменю

menuArrows.forEach(item => {
    item.addEventListener('click',e=>{
        item.parentElement.classList.toggle('_active');         
    })    
});

// Сам бургер и маска


if (iconBurger) {
    iconBurger.addEventListener('click',function(e){
        iconBurger.classList.toggle('_active');
        navBody.classList.toggle('_active');

        if(iconBurger.classList.contains('_active')) {
            lockPage();
        }
        else {
            unlockPage();
        }
    });
}

function lockPage () {
    let mask = document.createElement('div');
    mask.classList.add('page__mask');
    mask.addEventListener('click',unlockPage);
    page.appendChild(mask);

    body.classList.add('_lock');
}

function unlockPage (){
    body.classList.remove ('_lock');
    iconBurger.classList.remove('_active');
    navBody.classList.remove('_active');
    document.querySelector('.page__mask').remove(); 
    
    menuArrows.forEach(item => {        
            item.parentElement.classList.remove('_active');
    });
    
}

// Прокрутка при клике

let navLinks = document.querySelectorAll('.nav__link[data-goto]');

if (navLinks.length>0) {
    navLinks.forEach(navLink=>{
        navLink.addEventListener('click',onMenuLinkClick);
    });
};

function onMenuLinkClick (e) {
    const navLink = e.target;

    if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
        const gotoBlock =document.querySelector(navLink.dataset.goto);

        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight - document.querySelector('.intro__nav').offsetHeight;
     
        if(iconBurger.classList.contains('_active')) {
            unlockPage();
        }        

        window.scrollTo({
            top:gotoBlockValue,
            behavior:"smooth"
        });
        e.preventDefault();
    }
}
