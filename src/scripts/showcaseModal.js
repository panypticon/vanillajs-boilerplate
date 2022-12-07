import uxModalData from './uxModalData';

const handleCarouselKeys = (evt, component) => {
    if (evt.key === 'ArrowLeft' || evt.key === 'ArrowRight') {
        const direction = evt.key.slice(5).toLowerCase();
        component.imageContainer.classList.add(direction);
        component.shift(direction);
        setTimeout(() => {
            component.imageContainer.classList.remove('left', 'right');
            component.render();
        }, 500);
    }
};

export const handleCloseModal = evt => {
    const { target } = evt;
    if (target.classList.contains('can-close') || evt.key === 'Escape') {
        const modal = target.closest('.modal__background') || document.querySelector('.modal__background');
        modal.remove();
        document.body.classList.remove('no-scroll');
        window.removeEventListener('keyup', handleCloseModal);
        window.removeEventListener('keyup', handleCarouselKeys);
    }
};

class Carousel {
    constructor(data, parent) {
        this.parent = parent;
        this.imageContainer = document.createElement('div');
        this.imageContainer.classList.add('modal__img-container');
        this.images = [];
        this.captionData = data.map(item => item.caption);
        data.forEach(({ url }, index) => {
            const img = document.createElement('img');
            img.setAttribute('src', url);
            img.setAttribute('alt', this.captionData[index]);
            this.images.push(img);
        });
        this.caption = document.createElement('span');
        this.handleClick = this.handleClick.bind(this);
        const leftButton = document.createElement('button');
        leftButton.innerHTML = '<i class="bi bi-chevron-left"></i>';
        leftButton.dataset.direction = 'left';
        const rightButton = document.createElement('button');
        rightButton.innerHTML = '<i class="bi bi-chevron-right"></i>';
        rightButton.dataset.direction = 'right';
        const modalFigure = document.createElement('figure');
        modalFigure.classList.add('modal__figure');
        const figCaption = document.createElement('figcaption');
        figCaption.appendChild(this.caption);
        figCaption.appendChild(leftButton);
        figCaption.appendChild(rightButton);
        figCaption.addEventListener('click', this.handleClick);
        modalFigure.appendChild(this.imageContainer);
        modalFigure.appendChild(figCaption);
        this.parent.appendChild(modalFigure);
        this.shift('left');
        this.render();
        window.addEventListener('keyup', evt => handleCarouselKeys(evt, this));
    }

    render() {
        this.imageContainer.innerHTML = '';
        this.images.forEach(img => this.imageContainer.appendChild(img));
        this.caption.innerText = this.captionData[1];
    }

    shift(direction) {
        if (direction === 'left') {
            const poppedImage = this.images.pop();
            const poppedCaption = this.captionData.pop();
            this.images.unshift(poppedImage);
            this.captionData.unshift(poppedCaption);
        } else if (direction === 'right') {
            const shiftedImage = this.images.shift();
            const shiftedCaption = this.captionData.shift();
            this.images.push(shiftedImage);
            this.captionData.push(shiftedCaption);
        }
    }

    handleClick(evt) {
        const button = evt.target.closest('button');
        if (!button) return;
        const { direction } = button.dataset;
        this.imageContainer.classList.add(direction);
        direction && this.shift(direction);
        setTimeout(() => {
            this.imageContainer.classList.remove('left', 'right');
            this.render();
        }, 500);
    }
}

const createModal = id => {
    const { category, company, summary, content, image, carousel } = uxModalData[id];

    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modal__background', 'can-close');

    const modalBox = document.createElement('article');
    modalBox.classList.add('modal__box', 'fade-in-up');

    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal__header');

    const modalHeaderCategory = document.createElement('span');
    modalHeaderCategory.classList.add('modal__header-category');
    modalHeaderCategory.innerText = category;

    const modalHeaderCompany = document.createElement('span');
    modalHeaderCompany.classList.add('modal__header-company');
    modalHeaderCompany.innerText = company;

    const modalHeaderSummary = document.createElement('span');
    modalHeaderSummary.classList.add('modal__header-summary');
    modalHeaderSummary.innerText = summary;

    const modalHeaderClose = document.createElement('i');
    modalHeaderClose.classList.add('bi', 'bi-x-lg', 'can-close');

    const modalContent = document.createElement('section');
    modalContent.classList.add('modal__content');

    if (image && image.url && image.caption) {
        const { url, caption } = image;
        const modalFigure = document.createElement('figure');
        const modalImage = document.createElement('img');
        modalImage.setAttribute('src', url);
        modalImage.setAttribute('alt', caption);
        const modalCaption = document.createElement('figcaption');
        modalCaption.innerText = caption;
        modalFigure.appendChild(modalImage);
        modalFigure.appendChild(modalCaption);
        modalContent.appendChild(modalFigure);
    }

    carousel && new Carousel(carousel, modalContent);

    const modalText = document.createElement('div');
    modalText.classList.add('modal__text');
    modalText.innerHTML = content;

    modalHeader.appendChild(modalHeaderCategory);
    modalHeader.appendChild(modalHeaderCompany);
    modalHeader.appendChild(modalHeaderSummary);
    modalHeader.appendChild(modalHeaderClose);
    modalBox.appendChild(modalHeader);
    modalContent.appendChild(modalText);
    modalBox.appendChild(modalContent);
    modalBackground.appendChild(modalBox);
    document.body.appendChild(modalBackground);
    modalBackground.addEventListener('click', handleCloseModal);
};

export const handleOpenModal = evt => {
    const card = evt.target.closest('.card');
    card && createModal(card.dataset.card);
    document.body.classList.add('no-scroll');
    window.addEventListener('keyup', handleCloseModal);
};
