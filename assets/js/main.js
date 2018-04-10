// Scroll down function
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

// slide show for events
var slideIndex = 1;
/**
 * @param slideIndex index of the event showcased
 */
showSlides(slideIndex);

/**
 * @param n the number of slides we want to move through (default 1)
 */
function plusSlides(n) {
    showSlides(slideIndex += n); // move slide index up one
}

function currentSlide(n) {
    showSlides(slideIndex = n); // show nth slide
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("post");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
