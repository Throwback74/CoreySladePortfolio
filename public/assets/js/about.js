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

    // // Close mobile & tablet menu on item click
    // $('.navbar-item').each(function(e) {
    //   $(this).click(function(){
    //     if($('#navBurger').hasClass('is-active')){
    //       $('#navBurger').removeClass('is-active');
    //       $('#navMenu').removeClass('is-active');
    //     }
    //   });
    // });
  


    // Open or Close mobile & tablet menu
    // $('#navBurger').click(function () {
    //   if($('#navBurger').hasClass('is-active')){
    //     $('#navBurger').removeClass('is-active');
    //     $('#navMenu').removeClass('is-active');
    //   }else {
    //     $('#navBurger').addClass('is-active');
    //     $('#navMenu').addClass('is-active');
    //   }
    // });

  // function getAll(selector) {
  //   return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  // }
  // // Toggles

  // var $burgers = getAll('.burger');

  // if ($burgers.length > 0) {
  //   console.log($burgers);
  //   $burgers.forEach(function ($el) {
  //     $el.addEventListener('click', function () {
  //       var target = $el.dataset.target;
  //       var $target = document.getElementById(target);
  //       $el.classList.toggle('is-active');
  //       $target.classList.toggle('is-active');
  //     });
  //   });
  // }

  // if($("#container").hasClass("container--open")) {
  //     $(".deviconTitle").text("Technologies & Tools");
  //   }else{
  //     $(".deviconTitle").empty();
  //   }



});