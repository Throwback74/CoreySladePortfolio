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

  // if($("#container").hasClass("container--open")) {
  //     $(".deviconTitle").text("Technologies & Tools");
  //   }else{
  //     $(".deviconTitle").empty();
  //   }



});