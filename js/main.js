console.log("hello");


/////////document ready

$(document).ready(function () {
  console.log("document ready");

/////////open contact form through logo

  $("#logo").click(function() {
    $("#overlay").css("display", "block");

  })

////////// hover sqaure 1

  $('#one').mouseenter(function() {
    $('#two, #three, #four, #five, #six').addClass("colorHover");
  });
  $('#one').mouseleave(function() {
    $('#two, #three, #four, #five, #six').removeClass("colorHover");
  });

///////// hover sqaure 2

  $('#two').mouseenter(function() {
    $('#one, #three, #four, #five, #six').addClass("colorHover");
  });
  $('#two').mouseleave(function() {
    $('#one, #three, #four, #five, #six').removeClass("colorHover");
  });

///////// hover sqaure 3

$('#three').mouseenter(function() {
  $('#one, #two, #four, #five, #six').addClass("colorHover");
});
$('#three').mouseleave(function() {
  $('#one, #two, #four, #five, #six').removeClass("colorHover");
});

///////// hover sqaure 4

$('#four').mouseenter(function() {
  $('#one, #two, #three, #five, #six').addClass("colorHover");
});
$('#four').mouseleave(function() {
  $('#one, #two, #three, #five, #six').removeClass("colorHover");
});

///////// hover sqaure 5

$('#five').mouseenter(function() {
  $('#one, #two, #three, #four, #six').addClass("colorHover");
});
$('#five').mouseleave(function() {
  $('#one, #two, #three, #four, #six').removeClass("colorHover");
});

///////// hover sqaure 6

$('#six').mouseenter(function() {
  $('#one, #two, #three, #four, #five').addClass("colorHover");
});
$('#six').mouseleave(function() {
  $('#one, #two, #three, #four, #five').removeClass("colorHover");
});

///////contact overlay

  $(".projectLink").click(function() {
    $("#overlay").css("display", "block");
  })

  $("#mobileProjectLink").click(function() {
    $("#overlay").css("display", "block");
  })

  $(".material-icons").click(function() {
    $("#overlay").css("display", "none");
  })

//////////BRIBE COUNTDOWN

    setTimeout(function() { $("#wordChange").hide(); }, 1000);

    setTimeout(function() { $("#wordChange2").show(); }, 1200);
    setTimeout(function() { $("#wordChange2").hide(); }, 1700);

    setTimeout(function() { $("#wordChange3").show(); }, 1900);
    setTimeout(function() { $("#wordChange3").hide(); }, 2300);

    setTimeout(function() { $("#wordChange4").show(); }, 2500);
    setTimeout(function() { $("#wordChange4").hide(); }, 2900);

    setTimeout(function() { $("#wordChange5").show(); }, 3100);
    setTimeout(function() { $("#wordChange5").hide(); }, 3500);

    setTimeout(function() { $("#wordChange6").show(); }, 3700);
    setTimeout(function() { $("#wordChange6").hide(); }, 4100);

    setTimeout(function() { $("#wordChange7").show(); }, 4300);
    setTimeout(function() { $("#wordChange7").hide(); }, 4700);

    setTimeout(function() { $("#wordChange8").show(); }, 4900);
    setTimeout(function() { $("#wordChange8").hide(); }, 5300);

    setTimeout(function() { $("#wordChange9").show(); }, 5500);
    setTimeout(function() { $("#wordChange9").hide(); }, 5900);

    setTimeout(function() { $("#wordChange10").show(); }, 6100);
    setTimeout(function() { $("#wordChange10").css("animation", "fadeOut 5s"); }, 6900);
    setTimeout(function() { $("#bribeSentence").css("animation", "fadeOut 5s"); }, 6900);
    setTimeout(function() { $("#wordChange10").hide(); }, 6906);
    setTimeout(function() { $("#bribeSentence").hide(); }, 6906);

    setTimeout(function() { $("#wordChange11").show(); }, 6905);



  /////////open about me overlay

  $("#one").click(function() {
    $(".projectOneContainer").css("display", "block");
    $("#projectOverlayBackground1").css("display", "block");
  })

    /////////close about me overlay

  $("#exitProjectOverlay1").click(function() {
    $(".projectOneContainer").css("display", "none");
    $("#projectOverlayBackground1").css("display", "none");
  })

  $("#projectOverlayBackground1").click(function() {
    $(".projectOneContainer").css("display", "none");
    $("#projectOverlayBackground1").css("display", "none");
  })

  /////////open project 2 overlay

  $("#two").click(function() {
    $(".projectTwoContainer").css("display", "block");
    $("#projectOverlayBackground2").css("display", "block");
  })

    /////////close project 2 overlay

  $("#exitProjectOverlay2").click(function() {
    $(".projectTwoContainer").css("display", "none");
    $("#projectOverlayBackground2").css("display", "none");
  })

  $("#projectOverlayBackground2").click(function() {
    $(".projectTwoContainer").css("display", "none");
    $("#projectOverlayBackground2").css("display", "none");
  })

  /////////open project 3 overlay

  $("#three").click(function() {
    $(".projectThreeContainer").css("display", "block");
    $("#projectOverlayBackground3").css("display", "block");
  })

    /////////close project 3 overlay

  $("#exitProjectOverlay3").click(function() {
    $(".projectThreeContainer").css("display", "none");
    $("#projectOverlayBackground3").css("display", "none");
  })

  $("#projectOverlayBackground3").click(function() {
    $(".projectThreeContainer").css("display", "none");
    $("#projectOverlayBackground3").css("display", "none");
  })

  /////////open project 4 overlay

  $("#four").click(function() {
    $(".projectFourContainer").css("display", "block");
    $("#projectOverlayBackground4").css("display", "block");
  })

    /////////close project 4 overlay

  $("#exitProjectOverlay4").click(function() {
    $(".projectFourContainer").css("display", "none");
    $("#projectOverlayBackground4").css("display", "none");
  })

  $("#projectOverlayBackground4").click(function() {
    $(".projectFourContainer").css("display", "none");
    $("#projectOverlayBackground4").css("display", "none");
  })

  /////////open project 5 overlay

  $("#five").click(function() {
    $(".projectFiveContainer").css("display", "block");
    $("#projectOverlayBackground5").css("display", "block");
  })

    /////////close project 5 overlay

  $("#exitProjectOverlay5").click(function() {
    $(".projectFiveContainer").css("display", "none");
    $("#projectOverlayBackground5").css("display", "none");
  })

  $("#projectOverlayBackground5").click(function() {
    $(".projectFiveContainer").css("display", "none");
    $("#projectOverlayBackground5").css("display", "none");
  })

  /////////open project 6 overlay

  $("#six").click(function() {
    $(".projectSixContainer").css("display", "block");
    $("#projectOverlayBackground6").css("display", "block");
  })

    /////////close project 6 overlay

  $("#exitProjectOverlay6").click(function() {
    $(".projectSixContainer").css("display", "none");
    $("#projectOverlayBackground6").css("display", "none");
  })

  $("#projectOverlayBackground6").click(function() {
    $(".projectSixContainer").css("display", "none");
    $("#projectOverlayBackground6").css("display", "none");
  })

})
