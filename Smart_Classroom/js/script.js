document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlides() {
        slides.forEach((slide) => {
            slide.style.display = "none";
        });
        slides[index].style.display = "block";
        index = (index + 1) % slides.length;
        setTimeout(showSlides, 3000);
    }

    showSlides();
});
