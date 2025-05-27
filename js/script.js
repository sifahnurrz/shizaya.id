// script.js

// Navbar Scrolling Effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Handle special case for Kontak link
document.querySelectorAll('.nav-link[href="contact.html"]').forEach(link => {
  link.addEventListener('click', function(e) {
    // Check if we're already on the article page
    if (window.location.pathname.endsWith('article.html')) {
      e.preventDefault();
      const commentsSection = document.querySelector('.comments-section');
      if (commentsSection) {
        commentsSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    // Otherwise, let the link behave normally (go to contact.html)
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Animation on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Initialize animations
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Blog card hover effect
document.querySelectorAll('.blog-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = '';
    this.style.boxShadow = '';
  });
});

// Comment form interaction
const commentForm = document.querySelector('.comment-form');
if (commentForm) {
  commentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih atas komentar Anda!');
    this.reset();
  });
}

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.className = 'btn btn-primary back-to-top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.width = '50px';
backToTopButton.style.height = '50px';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = '99';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Initialize tooltips (for Bootstrap)
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function(tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Check URL hash on page load (for direct linking to comments)
window.addEventListener('load', function() {
  if (window.location.hash === '#comments') {
    const commentsSection = document.querySelector('.comments-section');
    if (commentsSection) {
      setTimeout(() => {
        commentsSection.scrollIntoView({
          behavior: 'smooth'
        });
      }, 300);
    }
  }
});