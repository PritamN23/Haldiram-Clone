document.addEventListener('DOMContentLoaded', function() {
    const bannerSlider = document.querySelector('.banner-slider');
    const bannerSlides = document.querySelector('.banner-slides');
    const slides = document.querySelectorAll('.banner-slide');
    const dotsContainer = document.querySelector('.banner-dots');
    let currentSlide = 0;

    
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('banner-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    function goToSlide(n) {
        bannerSlides.style.transform = `translateX(-${n * 100}%)`;
        document.querySelectorAll('.banner-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === n);
        });
        currentSlide = n;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }

    
    // setInterval(nextSlide, 10000);
});

window.onload = function() {
    var text = document.getElementById('scrolling-text');
    text.classList.add('scroll-animation');
  };