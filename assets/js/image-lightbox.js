// Image Lightbox for Hugo Blog
document.addEventListener('DOMContentLoaded', function() {
  // Create lightbox container
  const lightbox = document.createElement('div');
  lightbox.id = 'image-lightbox';
  lightbox.className = 'image-lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-overlay">
      <img class="lightbox-image" src="" alt="">
      <div class="lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  // Get all images in the content area
  const contentImages = document.querySelectorAll('.prose img');

  // Add click event to each image
  contentImages.forEach((img) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      showLightbox(this);
    });
  });

  // Show lightbox
  function showLightbox(img) {
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
    lightboxCaption.textContent = img.alt || '';

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event listeners
  lightbox.querySelector('.lightbox-overlay').addEventListener('click', function(e) {
    // Close only if clicking on the overlay (not the image or caption)
    if (e.target.classList.contains('lightbox-overlay')) {
      closeLightbox();
    }
  });

  // Keyboard navigation (ESC to close)
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
});
