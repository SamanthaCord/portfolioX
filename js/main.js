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

  $('#1').mouseenter(function() {
    $('#2, #3, #4, #5, #6').addClass("colorHover");
  });
  $('#1').mouseleave(function() {
    $('#2, #3, #4, #5, #6').removeClass("colorHover");
  });

///////// hover sqaure 2

  $('#2').mouseenter(function() {
    $('#1, #3, #4, #5, #6').addClass("colorHover");
  });
  $('#2').mouseleave(function() {
    $('#1, #3, #4, #5, #6').removeClass("colorHover");
  });

///////// hover sqaure 3

$('#3').mouseenter(function() {
  $('#1, #2, #4, #5, #6').addClass("colorHover");
});
$('#3').mouseleave(function() {
  $('#1, #2, #4, #5, #6').removeClass("colorHover");
});

///////// hover sqaure 4

$('#4').mouseenter(function() {
  $('#1, #2, #3, #5, #6').addClass("colorHover");
});
$('#4').mouseleave(function() {
  $('#1, #2, #3, #5, #6').removeClass("colorHover");
});

///////// hover sqaure 5

$('#5').mouseenter(function() {
  $('#1, #2, #3, #4, #6').addClass("colorHover");
});
$('#5').mouseleave(function() {
  $('#1, #2, #3, #4, #6').removeClass("colorHover");
});

///////// hover sqaure 6

$('#6').mouseenter(function() {
  $('#1, #2, #3, #4, #5').addClass("colorHover");
});
$('#6').mouseleave(function() {
  $('#1, #2, #3, #4, #5').removeClass("colorHover");
});

///////contact overlay

  $("#contact").click(function() {
    $("#overlay").css("display", "block");
  })

  $(".fa.fa-window-close-o").click(function() {
    $("#overlay").css("display", "none");
  })

  $("#wordChange").click(function() {
    $("#wordChange").text(random(bribes));
  })


})
