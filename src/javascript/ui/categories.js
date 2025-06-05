class CategoriesSlider {
    constructor(container, options = {}) {
        this.container = typeof container === 'string' ? document.querySelector(container) : container;

        if (!this.container) {
            console.error('Container not found');
            return;
        }

        this.block = this.container.querySelector('.CategoriesBlock');
        this.leftArrow = this.container.querySelector('.leftArrow');
        this.rightArrow = this.container.querySelector('.rightArrow');
        this.categories = this.block ? this.block.querySelectorAll('.cat') : [];

        if (!this.block || !this.leftArrow || !this.rightArrow || this.categories.length === 0) {
            console.error('Required elements missing in slider container');
            console.error(this.block, this.leftArrow, this.rightArrow, this.categories);
            return;
        }

        // Options
        this.maxClicksRight = options.maxClicksRight || (this.container.dataset.bounce ? 5 : undefined);
        this.bounceAfterLeftClicks = options.bounceAfterLeftClicks || (this.container.dataset.bounce ? 2 : 0);

        // Ensure enough items for maxClicksRight
        if (this.maxClicksRight && this.categories.length < this.maxClicksRight + 1) {
            console.warn(`Slider needs at least ${this.maxClicksRight + 1} items, but has ${this.categories.length}`);
        }

        this.currentIndex = 0;
        this.leftClicksAfterEnd = 0;
        this.wasAtEnd = false;

        this.updateDimensions();

        this.slide = this.slide.bind(this);
        this.handleResize = this.handleResize.bind(this);

        this.init();
    }

    updateDimensions() {
        this.itemWidth = this.categories[0].offsetWidth;
        this.containerWidth = this.block.offsetWidth;
        this.totalWidth = this.categories.length * this.itemWidth;
        this.visibleCategories = Math.round(this.containerWidth / this.itemWidth) || 1; // At least 1
        this.maxScroll = Math.max(0, this.totalWidth - this.containerWidth);
        this.maxIndex = Math.max(0, this.categories.length - this.visibleCategories);

        // For data-bounce, adjust maxIndex to ensure maxClicksRight reaches end
        if (this.maxClicksRight) {
            this.clicksPerStep = Math.ceil((this.maxIndex + 1) / this.maxClicksRight);
            this.maxIndex = Math.min(this.maxIndex, this.maxClicksRight * this.clicksPerStep);
        }
    }

    init() {
        this.leftArrow.addEventListener('click', () => this.slide('left'));
        this.rightArrow.addEventListener('click', () => this.slide('right'));

        this.debouncedResize = this.debounce(this.handleResize, 200);
        window.addEventListener('resize', this.debouncedResize);

        this.updateArrows();
        this.updateScrollPosition();
    }

    slide(direction) {
        const prevIndex = this.currentIndex;
        let step = this.maxClicksRight ? this.clicksPerStep : this.visibleCategories;

        if (direction === 'left') {
            this.currentIndex = Math.max(0, this.currentIndex - step);
            if (this.wasAtEnd) {
                this.leftClicksAfterEnd++;
            }
        } else {
            this.currentIndex = Math.min(this.maxIndex, this.currentIndex + step);
            if (this.currentIndex >= this.maxIndex) {
                this.wasAtEnd = true;
                this.leftClicksAfterEnd = 0;
            }
        }

        // Trigger bounce animation if conditions met
        if (this.bounceAfterLeftClicks > 0 && this.wasAtEnd && this.leftClicksAfterEnd === this.bounceAfterLeftClicks) {
            this.block.classList.add('bounce');
            setTimeout(() => this.block.classList.remove('bounce'), 600);
        }

        this.updateScrollPosition();
        this.updateArrows();
    }

    updateScrollPosition() {
        this.updateDimensions(); // Recalculate on scroll for accuracy
        const scrollPosition = this.currentIndex * this.itemWidth;
        this.block.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }

    updateArrows() {
        this.leftArrow.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
        this.rightArrow.style.opacity = this.currentIndex >= this.maxIndex ? '0.5' : '1';
    }

    handleResize() {
        this.updateScrollPosition();
        this.updateArrows();
    }

    debounce(func, wait) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }

    destroy() {
        this.leftArrow.removeEventListener('click', () => this.slide('left'));
        this.rightArrow.removeEventListener('click', () => this.slide('right'));
        window.removeEventListener('resize', this.debouncedResize);
    }
}

// Initialize sliders
document.addEventListener('DOMContentLoaded', () => {
    const sliderContainers = document.querySelectorAll('.slider-container');
    sliderContainers.forEach(container => {
        const options = {
            maxClicksRight: container.dataset.bounce ? 5 : undefined,
            bounceAfterLeftClicks: container.dataset.bounce ? 2 : undefined
        };
        new CategoriesSlider(container, options);
    });
});