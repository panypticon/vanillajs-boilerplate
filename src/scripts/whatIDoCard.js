import throttle from 'lodash/throttle';

class WhatIDoCard {
    constructor(elem) {
        this.card = elem;
        this.handleCardMouseMove = this.handleCardMouseMove.bind(this);
        this.handleIntersectionObserver = this.handleIntersectionObserver.bind(this);
        this.card.addEventListener('mousemove', throttle(this.handleCardMouseMove, 250));
        this.observer = new IntersectionObserver(this.handleIntersectionObserver, {
            rootMargin: '0px',
            threshold: 0.25
        });
        this.observer.observe(this.card);
    }

    handleCardMouseMove(evt) {
        const cardRect = this.card.getBoundingClientRect();
        const { left, top, width, height } = cardRect;
        const x = evt.clientX - left;
        const y = evt.clientY - top;
        const widthThreshold = width / 2;
        const heightThreshold = height / 2;
        if (x <= widthThreshold && y <= heightThreshold) {
            this.card.classList.add('top-left');
            this.card.classList.remove('top-right', 'bottom-right', 'bottom-left');
        } else if (x > widthThreshold && y <= heightThreshold) {
            this.card.classList.add('top-right');
            this.card.classList.remove('bottom-right', 'bottom-left', 'top-left');
        } else if (x <= widthThreshold && y > heightThreshold) {
            this.card.classList.add('bottom-left');
            this.card.classList.remove('top-left', 'top-right', 'bottom-right');
        } else if (x > widthThreshold && y > heightThreshold) {
            this.card.classList.add('bottom-right');
            this.card.classList.remove('bottom-left', 'top-left', 'top-right');
        }
    }

    handleIntersectionObserver(entries) {
        entries[0].isIntersecting && this.card.classList.add('fade-in-up-card');
    }
}

export default WhatIDoCard;
