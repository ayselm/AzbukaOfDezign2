class RelatedArticlesSlider {
  constructor() {
    this.block = document.querySelector('.RelatedArticles .AriclesBlock');
    this.leftArrow = document.querySelector('.RelatedArticles .leftArrow');
    this.rightArrow = document.querySelector('.RelatedArticles .rightArrow');
    this.articles = this.block.querySelectorAll('a');
    this.currentIndex = 0;
    this.visibleItems = 3; // Количество видимых статей
    this.itemWidth = this.articles[0].offsetWidth + 30; // Ширина элемента + gap
    this.maxScroll = (this.articles.length - this.visibleItems) * this.itemWidth;

    this.init();
  }

  init() {
    this.leftArrow.addEventListener('click', () => this.slide('left'));
    this.rightArrow.addEventListener('click', () => this.slide('right'));
    this.updateArrows();
  }

  slide(direction) {
    if (direction === 'left') {
      this.currentIndex = Math.max(0, this.currentIndex - 1);
    } else {
      this.currentIndex = Math.min(this.articles.length - this.visibleItems, this.currentIndex + 1);
    }

    const scrollPosition = this.currentIndex * this.itemWidth;
    this.block.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });

    this.updateArrows();
  }

  updateArrows() {
    this.leftArrow.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
    this.rightArrow.style.opacity = this.currentIndex >= this.articles.length - this.visibleItems ? '0.5' : '1';
  }
}

// Инициализация слайдера при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  new RelatedArticlesSlider();
}); 