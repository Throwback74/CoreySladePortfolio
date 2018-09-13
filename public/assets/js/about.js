$(document).ready(function () {
  $(".svgGrid").html(
    `<svg width="50%" height="50%" viewBox="0 0 60 60" preserveAspectRatio="none">
    <g class="icon icon--grid">
      <rect x="32.5" y="5.5" width="22" height="22" class="grid-rect"/>
      <rect x="4.5" y="5.5" width="22" height="22" class="grid-rect"/>
      <rect x="32.5" y="33.5" width="22" height="22" class="grid-rect"/>
      <rect x="4.5" y="33.5" width="22" height="22" class="grid-rect"/>
    </g>
  </svg>`
  );


  $('.navbar-burger').click(function() {
    $('#navbarMenuHeroA, .navbar-burger').toggleClass('is-active');
  });

    // Hide #deviconTitle on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var titleHeight = $('#deviconTitle').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 150);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the title, add class .title-up.
    // This is necessary so you never see what is "behind" the title.
    if (st > lastScrollTop && st > titleHeight){
        // Scroll Down
        $('#deviconTitle').removeClass('title-down').addClass('title-up');
    } else {
        // Scroll Up
        // if(st + $(window).height() < $(document).height()) {
            if(st <= 40) {
            console.log(st);
            $('#deviconTitle').removeClass('title-up').addClass('title-down');
        }
    }
    
    lastScrollTop = st;
}



});