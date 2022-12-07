class SegmentedControl {
    constructor(control, elementForLeft, elementForRight) {
        this.control = control;
        this.indicator = this.control.querySelector('.segmented-control__indicator');
        this.elementForLeft = elementForLeft;
        this.elementForRight = elementForRight;
        this.handleSegmentedChange = this.handleSegmentedChange.bind(this);
        this.control.addEventListener('change', this.handleSegmentedChange);
    }

    handleSegmentedChange(evt) {
        const { location } = evt.target.dataset;
        this.indicator.classList.add(`segmented-control__indicator--${location}`);
        this.indicator.classList.remove(`segmented-control__indicator--${location === 'left' ? 'right' : 'left'}`);

        if (location === 'left') {
            this.elementForLeft.classList.remove('hidden');
            this.elementForRight.classList.add('hidden');
        } else if (location === 'right') {
            this.elementForLeft.classList.add('hidden');
            this.elementForRight.classList.remove('hidden');
        }
    }
}

export default SegmentedControl;
