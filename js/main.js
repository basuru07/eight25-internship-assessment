document.addEventListener('DOMContentLoaded', function() {
  // Logo animations
  animateLogos();
  
  // Device hover effects
  setupDeviceHoverEffects();
  
  // Testimonial carousel
  setupTestimonialCarousel();
});

/**
* Creates subtle floating animation for logo rectangles
*/
function animateLogos() {
  const logoRectangles = document.querySelectorAll('.logo-rectangle');
  
  logoRectangles.forEach(rectangle => {
      animateSingleLogo(rectangle);
  });
}

/**
* Animates a single logo with subtle movement
* @param {HTMLElement} logoElement - The logo element to animate
*/
function animateSingleLogo(logoElement) {
  // Random movement parameters
  const randomX = Math.random() * 4 - 2; // -2 to 2px
  const randomY = Math.random() * 4 - 2; // -2 to 2px
  const randomDelay = Math.random() * 2; // 0 to 2s delay
  const animationDuration = 3 + Math.random() * 2; // 3-5s
  
  // Apply the transition
  logoElement.style.transition = `transform ${animationDuration}s ease-in-out ${randomDelay}s`;
  
  // Move after delay
  setTimeout(() => {
      logoElement.style.transform = `translate(${randomX}px, ${randomY}px)`;
      
      // Reset position after animation completes
      setTimeout(() => {
          logoElement.style.transform = 'translate(0, 0)';
          
          // Continue animation with a slight pause
          setTimeout(() => {
              animateSingleLogo(logoElement);
          }, 500);
          
      }, animationDuration * 1000);
  }, randomDelay * 1000);
}

/**
* Sets up hover effects for device images
*/
function setupDeviceHoverEffects() {
  const tabletDevice = document.getElementById('tablet-device');
  const phoneDevice = document.getElementById('phone-device');
  
  if (tabletDevice) {
      tabletDevice.parentElement.addEventListener('mouseover', function() {
          tabletDevice.parentElement.style.transform = 'translateY(-5px)';
      });
      
      tabletDevice.parentElement.addEventListener('mouseout', function() {
          tabletDevice.parentElement.style.transform = 'translateY(0)';
      });
  }
  
  if (phoneDevice) {
      phoneDevice.parentElement.addEventListener('mouseover', function() {
          phoneDevice.parentElement.style.transform = 'translateY(-5px)';
      });
      
      phoneDevice.parentElement.addEventListener('mouseout', function() {
          phoneDevice.parentElement.style.transform = 'translateY(0)';
      });
  }
}
// Add this to your existing main.js file

// Device animations for the AI Automation page
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the AI Automation page by looking for the elements
    const tabletFrame = document.getElementById('tablet-device');
    const phoneFrame = document.getElementById('phone-device');
    
    // Only apply effects if the elements exist on the current page
    if (tabletFrame && phoneFrame) {
        // Tablet frame hover effects
        tabletFrame.addEventListener('mouseover', function() {
            this.style.transform = this.style.transform + ' translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        tabletFrame.addEventListener('mouseout', function() {
            this.style.transform = this.style.transform.replace(' translateY(-5px)', '');
        });
        
        // Phone frame hover effects
        phoneFrame.addEventListener('mouseover', function() {
            this.style.transform = this.style.transform + ' translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        phoneFrame.addEventListener('mouseout', function() {
            this.style.transform = this.style.transform.replace(' translateY(-5px)', '');
        });
    }
});


// Add this to your main.js file or in a script tag at the bottom of your HTML before the closing body tag

document.addEventListener('DOMContentLoaded', function() {
  // Array of Gartner images to cycle through
  const gartnerImages = [
    'images/Frame 2029268738.png',
    'images/Frame 20292687381.png',  // Replace with your actual image paths
    'images/Frame 20292687382.png'   // Replace with your actual image paths
  ];
  
  // Get the elements
  const gartnerFrame = document.querySelector('.gartner-frame');
  const prevButton = document.querySelector('.prev-arrow');
  const nextButton = document.querySelector('.next-arrow');
  
  // Current image index
  let currentIndex = 0;
  
  // Handle next button click
  nextButton.addEventListener('click', function() {
    // Fade out current image
    gartnerFrame.classList.add('fade-out');
    
    setTimeout(function() {
      // Update index
      currentIndex = (currentIndex + 1) % gartnerImages.length;
      // Change image source
      gartnerFrame.src = gartnerImages[currentIndex];
      // Fade in new image
      gartnerFrame.classList.remove('fade-out');
      gartnerFrame.classList.add('fade-in');
      
      setTimeout(function() {
        gartnerFrame.classList.remove('fade-in');
      }, 500);
    }, 300);
  });
  
  // Handle previous button click
  prevButton.addEventListener('click', function() {
    // Fade out current image
    gartnerFrame.classList.add('fade-out');
    
    setTimeout(function() {
      // Update index (handle negative index)
      currentIndex = (currentIndex - 1 + gartnerImages.length) % gartnerImages.length;
      // Change image source
      gartnerFrame.src = gartnerImages[currentIndex];
      // Fade in new image
      gartnerFrame.classList.remove('fade-out');
      gartnerFrame.classList.add('fade-in');
      
      setTimeout(function() {
        gartnerFrame.classList.remove('fade-in');
      }, 500);
    }, 300);
  });
});


