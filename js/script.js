/* 
 document.getElementById('yr'); -- метод, который позволяет искать элемент c  ID 
document.getElementsByClassName('asdad');-- метод, который позволяет искать элемент c  Class
document.getElementsByTagName('br');-- метод, который позволяет искать элемент teg 
document.querySelector('.ckassName'); -- метод, который позволяет искать элемент по любому типу селектора (ищет первое и останавливает свой поиск)
document.querySelectorAll('div');  -- метод, который позволяет искать все совпадения  которые мы указываем в виде селектора  на странице */
const header__logo = document.getElementById('header__logo');
const menu__left = document.getElementById('menu__left');
const menu__right = document.getElementById('menu__right');
const header__body = document.getElementById('header__body');
const foot__header = document.getElementById('foot__header');
const slider = $(".owl-carousel");


header__logo.addEventListener('click', () => {
    menu__left.classList.toggle('show__addMenu__left');
    menu__right.classList.toggle('show__addMenu__right');
    header__body.classList.toggle('hide__header__body');
    foot__header.classList.toggle('hide__foot__header');
});

$(document).ready(function() {

    slider.owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 1000,
        dotsContainer: '.thumb'
    });
    $('.thumb').click(function() {
        $('.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 1000]);
    });

});