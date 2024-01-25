

// gallery slideshow

const grids = {
    'grid1': {
      slides: document.querySelectorAll('#grid1 .grid .grid-content'),
      currentIndex: 0
    },
    'grid2': {
      slides: document.querySelectorAll('#grid2 .grid .grid-content'),
      currentIndex: 0
    },
    'grid3': {
        slides: document.querySelectorAll('#grid3 .grid .grid-content'),
        currentIndex: 0
      },
      'grid4': {
        slides: document.querySelectorAll('#grid4 .grid .grid-content'),
        currentIndex: 0
      },
      'grid5': {
        slides: document.querySelectorAll('#grid5 .grid .grid-content'),
        currentIndex: 0
      }
  };
  
  function showSlides(gridId) {
    const { slides, currentIndex } = grids[gridId];
  
    slides.forEach((slide, index) => {
      const calculatedIndex = (index + currentIndex) % slides.length;
      if (index >= currentIndex && index < currentIndex + 4) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }
  
  function nextSlide(gridId) {
    const { slides, currentIndex } = grids[gridId];
    grids[gridId].currentIndex = (currentIndex + 1) % slides.length;
    showSlides(gridId);
  }
  
  function prevSlide(gridId) {
    const { slides, currentIndex } = grids[gridId];
    grids[gridId].currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlides(gridId);
  }
  
  // Initial display for each grid
  showSlides('grid1');
  showSlides('grid2');


  function showSlides(gridId) {
    const { slides, currentIndex } = grids[gridId];
    const containerWidth = document.getElementById(gridId).offsetWidth;
    const imagesPerSlide = calculateImagesPerSlide(containerWidth);
  
    slides.forEach((slide, index) => {
      const calculatedIndex = (index + currentIndex) % slides.length;
      if (index >= currentIndex && index < currentIndex + imagesPerSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }
  
  function calculateImagesPerSlide(containerWidth) {
    // You can adjust these values based on your preference
    const desktopThreshold = 768; // Adjust this value for desktop screens
    const mobileThreshold = 480;  // Adjust this value for mobile screens
    const desktopImages = 4;      // Number of images to show on desktop
    const mobileImages = 1;       // Number of images to show on mobile
  
    return containerWidth >= desktopThreshold ? desktopImages : mobileImages;
  }

  function openModal(imagePath) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
  
    modal.style.display = 'block';
    modalImage.src = imagePath;
  }
  
  function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
  }
  


/*

whatsapp: https://api.whatsapp.com/send?text=[post-title] [post-url]




Twitter social share URL:

https://twitter.com/share?url=[post-url]&text=[post-title]




LinkedIn social share URL:

https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]




Facebook social share URL:

https://www.facebook.com/sharer.php?u=[post-url]



*/  

const facebookBtn = document.querySelector(".facebook-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");


function init() {
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Check out this post from NESA UNILAG: ")

    facebookBtn.setAttribute(
        "href", 
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );

    twitterBtn.setAttribute(
        "href", 
        `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
    );

    whatsappBtn.setAttribute(
        "href", 
        `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`
    );

    linkedinBtn.setAttribute(
        "href", 
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );
}


init();

