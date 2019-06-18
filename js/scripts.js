
$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var number = $("#number").val();
    var output = 1;

    if (number <= 0) {
      output = 1;
    } else {
      for (i=1; i<=number; i++) {
        output = output*i;
      }
    }
$("#result").html(output);
event.preventDefault()

  });
});
