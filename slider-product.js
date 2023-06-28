// let slideIndex_product = 1;
// showSlides_product(slideIndex_product);

// // Next/previous controls
// function plusSlides_product(n) {
//   showSlides_product(slideIndex_product += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides_product(slideIndex_product = n);
// }

// function showSlides_product(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides_product");
//   let dots = document.getElementsByClassName("dot_product");
//   if (n > slides.length) {slideIndex_product = 1};
//   if (n < 1) {slideIndex_product = slides.length};
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active_product", "");
//   }
//   slides[slideIndex_product-1].style.display = "block";
  
// };