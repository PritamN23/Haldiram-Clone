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


  document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const closeSidebar = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const mainContent = document.querySelector('main');

    function openSidebar() {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        mainContent.classList.add('blur');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebarFunc() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        mainContent.classList.remove('blur');
        document.body.style.overflow = 'auto';
    }

    menuBtn.addEventListener('click', openSidebar);
    closeSidebar.addEventListener('click', closeSidebarFunc);
    
    document.addEventListener('click', function(event) {
        if (sidebar.classList.contains('open') && 
            !sidebar.contains(event.target) && 
            !menuBtn.contains(event.target)) {
            closeSidebarFunc();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && sidebar.classList.contains('open')) {
            closeSidebarFunc();
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const profileBtn = document.querySelector('.profile-btn');
    const modal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close-btn');

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    profileBtn.addEventListener('click', openModal);
    
    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const locationBtn = document.querySelector('.location-btn');
    const modal = document.getElementById('locationModal');
    const closeBtn = document.querySelector('.close-btn');
    const detectLocationBtn = document.querySelector('.detect-location');
    const enterAddressBtn = document.querySelector('.enter-address');

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    locationBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    detectLocationBtn.addEventListener('click', function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                // Handle the location data here
                console.log(position.coords.latitude, position.coords.longitude);
                closeModal();
            });
        }
    });

    enterAddressBtn.addEventListener('click', function() {
        // Handle address entry here
        console.log('Enter address clicked');
        closeModal();
    });
});
