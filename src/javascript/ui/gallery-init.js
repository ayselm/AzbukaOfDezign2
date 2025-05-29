document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    if (!gallery) return;

    const track = gallery.querySelector('.gallery-track');
    const slides = gallery.querySelectorAll('.gallery-slide');
    const dots = gallery.querySelectorAll('.dot');
    let current = 0;
    let interval = null;
    let isAnimating = false;

    function goToSlide(index) {
        if (isAnimating) return;
        isAnimating = true;

        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        track.style.transform = `translateX(-${index * 100}%)`;
        
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        current = index;

        // Reset animation flag after transition
        setTimeout(() => {
            isAnimating = false;
        }, 500); // Match this with your CSS transition duration
    }

    function nextSlide() {
        if (!isAnimating) {
            goToSlide(current + 1);
        }
    }

    function startAutoPlay() {
        if (interval) {
            clearInterval(interval);
        }
        interval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        if (interval) {
            clearInterval(interval);
            interval = null;
        }
    }

    // Initialize dots with proper event delegation
    gallery.addEventListener('click', (e) => {
        const dot = e.target.closest('.dot');
        if (dot) {
            const index = Array.from(dots).indexOf(dot);
            if (index !== -1) {
                stopAutoPlay();
                goToSlide(index);
                startAutoPlay();
            }
        }
    });

    // Gallery click handler
    gallery.addEventListener('click', (e) => {
        if (!e.target.closest('.dot')) {
            stopAutoPlay();
            nextSlide();
            startAutoPlay();
        }
    });

    // Start autoplay
    startAutoPlay();

    // Pause on hover
    gallery.addEventListener('mouseenter', stopAutoPlay);
    gallery.addEventListener('mouseleave', startAutoPlay);

    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    gallery.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    });

    gallery.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoPlay();
    });

    function handleSwipe() {
        if (isAnimating) return;
        
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0) {
                goToSlide(current + 1); // Swipe left
            } else {
                goToSlide(current - 1); // Swipe right
            }
        }
    }

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        stopAutoPlay();
    });
}); 