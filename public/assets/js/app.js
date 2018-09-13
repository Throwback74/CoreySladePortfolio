// $(document).ready(function(){
//     $('.carousel.carousel-slider').carousel({full_width: true});


// });

// setInterval(function(){
//     $('.carousel').carousel('next');
// }, 5000);

//SCROLLSPY
// $(document).ready(function(){
//     $('.scrollspy').scrollSpy();
// });

//Bulma navbar "burger" function for mobile
$(document).ready(function() {

    $('.navbar-burger').click(function() {
        $('#navbarMenuHeroA, .navbar-burger').toggleClass('is-active');
    });
// // Check for click events on the navbar burger icon
//     $(".navbar-burger").click(function() {

//         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
//         $(".navbar-burger").toggleClass("is-active");
//         $(".navbar-menu").toggleClass("is-active");

//     });
});