console.log("hello");

bribes = ["Chocolate", "Gin", "Pie", "Cudos", "Sour Worms", "Whiskey", "Pizza", "Cigars", "Cheese"];
// console.log(bribes);

const random = function(array) {
  for (let i = 0; i < array.length; i++) {
    return array[Math.floor(Math.random() * array.length)];
  }
};
console.log(random(bribes));


$(document).ready(function () {
  console.log("document ready");

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
