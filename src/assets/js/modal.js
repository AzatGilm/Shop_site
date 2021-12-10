let listingBlock = document.getElementById('listing-first');
let listingItemImgs = listingBlock.querySelectorAll('.listing-item__img');
let modalBlock = document.getElementById('modal');
let modalcontent = document.querySelector('.modal-content');
let modalImg = modalBlock.querySelector('.modal-grid__top-left');
let closIcon = modalBlock.querySelector('.modal__close');
let body = document.body;

if (listingItemImgs.length > 0) {
    listingItemImgs.forEach(listingItemImg => {
        listingItemImg.addEventListener('click',imgOnclick);
    });
}

function imgOnclick (e) {
    const listingItemImg = e.target;
    modalImg.src=listingItemImg.src;
    modalBlock.classList.add('show-modal');
    body.classList.add('_lock');
    closIcon.addEventListener('click',unLock); 
    modalBlock.addEventListener('click',unLock,false); 
    modalcontent.addEventListener('click',e=>{
        e.stopImmediatePropagation();
    });
}

function unLock () {
    modalBlock.classList.remove('show-modal');
    body.classList.remove('_lock');
}

