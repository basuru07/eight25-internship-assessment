document.addEventListener('DOMContentLoaded', function () {
    const discoverBtn = document.querySelector('.discover-btn');
    if (discoverBtn) {
        discoverBtn.addEventListener('click', () => {
            alert('Discovering success stories...');
        });
    } else {
        console.warn('Discover button not found');
    }

    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const frameImage = document.querySelector('.gartner-frame');

    // Array of frame image paths (fixed slashes)
    const images = [
        'images/Frame 2029268738.png',
        'images/Frame 20292687381.png',
        'images/Frame 20292687382.png'
    ];

    // Verify elements exist
    if (!prevArrow || !nextArrow || !frameImage) {
        console.error('One or more elements not found:', { prevArrow, nextArrow, frameImage });
        return;
    }

    // Function to update image with animation
    function updateImage(newIndex, direction) {
        // Remove previous animation classes
        frameImage.classList.remove('slide-left', 'slide-right');
        void frameImage.offsetWidth; // Force reflow to restart animation
        frameImage.src = images[newIndex];
        frameImage.setAttribute('data-index', newIndex);
        frameImage.setAttribute('data-direction', direction);
        frameImage.classList.add(`slide-${direction}`); // Apply animation class
    }

    // Handle click on previous arrow
    prevArrow.addEventListener('click', () => {
        let currentIndex = parseInt(frameImage.getAttribute('data-index')) || 0;
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Cycle backward
        updateImage(currentIndex, 'left'); // Slide from left
    });

    // Handle click on next arrow
    nextArrow.addEventListener('click', () => {
        let currentIndex = parseInt(frameImage.getAttribute('data-index')) || 0;
        currentIndex = (currentIndex + 1) % images.length; // Cycle forward
        updateImage(currentIndex, 'right'); // Slide from right
    });
});