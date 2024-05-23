// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.mySlides');
    slides.forEach(slide => slide.style.display = 'none');
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex < 1) { slideIndex = slides.length }
    if (slideIndex > slides.length) { slideIndex = 1 }
    showSlides(slideIndex);
}
