//import createElement from '../../assets/lib/create-element.js';
import {createSlideElement, createDivContainerElement} from '../../assets/lib/create-element.js';

export default class Carousel {
    constructor(slides) {
        this.slides = slides;
        this.step = 0;
        this.elem = createDivContainerElement('carousel');
        this.init();
    }

    init() {
        // контейнер для слайдов
        let carouselInner = document.createElement('div');
        carouselInner.classList.add('carousel__inner');
        // создаем слайды
        let createdSlides = this.slides.map(createSlideElement);
        // добавляем слайды в контейнер
        createdSlides.forEach(slide => carouselInner.insertAdjacentElement('beforeend', slide));
        // добавляем контейнер для слайдов в общий контейнер
        this.elem.insertAdjacentElement('beforeend', carouselInner);

        let arrowLeft = this.elem.querySelector('.carousel__arrow_left');
        let arrowRight = this.elem.querySelector('.carousel__arrow_right');
        arrowLeft.style.display = 'none';

        this.elem.addEventListener('click', function(event) {
            let arrow = event.target;
            let carouselInnerWidth = carouselInner.offsetWidth;

            switch(true) {
                case arrow.closest('.carousel__arrow_right'):
                    this.step++;
                    break;
                case arrow.closest('.carousel__arrow_left'):
                    this.step--;
                    break;
                default:
                    return;
            }

            let offset = -carouselInnerWidth * this.step;
            carouselInner.style.transform = `translateX(${offset}px)`;

            arrowLeft.style.display = step === 0 ? 'none' : '';
            arrowRight.style.display = step === (carouselInner.children.length - 1) ? 'none' : '';

        });

        carouselInner.addEventListener('click', (event) => {
            let target = event.target;
            if (!target.closest('.carousel__slide')) return;
            let carouselSlide = target.closest('.carousel__slide');
            let slideId = carouselSlide.dataset.id;
            this.onClickCarouselButton(slideId);
        });
    }

    onClickCarouselButton(slideId) {
        const customEvent = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
            detail: slideId, // Уникальный идентификатора товара из объекта товара
            bubbles: true, // это событие всплывает - это понадобится в дальнейшем
        });
        this.elem.dispatchEvent(customEvent);
    }
}
