function toggleBurgerMenu() {
    const nav = document.querySelector("nav");
    if (nav.className === "nav-bar") {
      nav.className += " responsive";
    } else {
      nav.className = "nav-bar";
    }
  }

let slideIndex = 1
showSlides(slideIndex)

function plusSlides (n) {
  showSlides((slideIndex += n))
}

function currentSlide (n) {
  showSlides((slideIndex = n))
}

function showSlides (n) {
  let i
  let slides = document.getElementsByClassName('slides')
  let dots = document.getElementsByClassName('dot')
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
}

let currentIndex = 0;

function moveCarousel(step) {
    const testimonials = document.querySelectorAll('.testimonial-item');
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    } else if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    testimonials.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });
}
