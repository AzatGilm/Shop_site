let dotItems = document.querySelectorAll('.dot__item[data-img-src]');
let introImg = document.querySelector('.intro__img');

if (dotItems.length>0) {
    dotItems.forEach( dotItem =>{ 
        dotItem.addEventListener('click',onDotclick);        
    });
}

function onDotclick (e) {
    const dotItem = e.target;

    if (dotItem.dataset.imgSrc) {
        introImg.src = dotItem.dataset.imgSrc;
    }
}
