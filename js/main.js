console.log("hello");

////////bribe page random word display

bribes = ["Chocolate", "Gin", "Pie", "Cudos", "Sour Worms", "Whiskey", "Pizza", "Cigars", "Cheese", "All the things"];
// console.log(bribes);

const random = function(array) {
  for (let i = 0; i < array.length; i++) {
    return array[Math.floor(Math.random() * array.length)];
  }
};
console.log(random(bribes));

/////////document ready

$(document).ready(function () {
  console.log("document ready");

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

  $("#contact").click(function() {
    $("#overlay").css("display", "block");
  })

  $("#mobileContact").click(function() {
    $("#overlay").css("display", "block");
  })

  $(".material-icons").click(function() {
    $("#overlay").css("display", "none");
  })

  $("#wordChange").click(function() {
    $("#wordChange").text(random(bribes));
  })

  /////////open project 1 overlay

  $("#one").click(function() {
    $(".projectOneContainer").css("display", "block");
    $("#projectOverlayBackground").css("display", "block");
  })

    /////////close project 1 overlay

  $("#exitProjectOverlay").click(function() {
    $(".projectOneContainer").css("display", "none");
    $("#projectOverlayBackground").css("display", "none");
  })


})
