const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlider = document.querySelector('.main-slide');
const quantitySlides = mainSlider.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activeSlide = 0;

sidebar.style.top = `${-(quantitySlides - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
})

downBtn.addEventListener('click', () => {
    changeSlide('down');
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlide++;
        if (activeSlide === quantitySlides) {
            activeSlide = 0;
        }
    }
    else if (direction === 'down') {
        activeSlide--;
        if (activeSlide < 0) {
            activeSlide = quantitySlides - 1;
        }
    }

    const height = container.clientHeight;

    mainSlider.style.transform = `translateY(-${activeSlide * height}px)`;
    sidebar.style.transform = `translateY(${activeSlide * height}px)`;
}