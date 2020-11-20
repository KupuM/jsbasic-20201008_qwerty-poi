function createSlideElement(({id, image, price, name}) => {
    let slide = document.createElement('div');
    slide.classList.add('carousel__slide');
    slide.setAttribute('data-id', ${id});
    slide.innerHTML = `
        <img src="/assets/images/carousel/${image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${price.toFixed(2)}</span>
          <div class="carousel__title">${name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      `;
    return slide;
})

function createDivContainerElement(className) => {
  let div = document.createElement('div');
  div.classList.add(className);
  div.innerHTML = `
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    `;
}

export {createSlideElement, createDivContainerElement}
