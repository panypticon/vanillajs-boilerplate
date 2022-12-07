class WhyICareItem {
    constructor(elem) {
        this.item = elem;
        this.handleIntersectionObserver = this.handleIntersectionObserver.bind(this);
        this.observer = new IntersectionObserver(this.handleIntersectionObserver, {
            rootMargin: '0px',
            threshold: 0.25
        });
        this.observer.observe(this.item);
    }

    handleIntersectionObserver(entries) {
        entries[0].isIntersecting && this.item.classList.add('fade-in-up');
    }
}

export default WhyICareItem;
