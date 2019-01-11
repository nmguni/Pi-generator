// input

$('input[type="number"').keypress(function(event) {
  if (event.which === 13) {
    if ($(this).val() <= 20) {
      let pies = $(this).val();
      let finalAnswer = parseFloat(Math.PI).toFixed(pies);
      $("#answer").html(finalAnswer);
    } else {
      $("#answer").html($(this).val() + " is too Big");
    }
  }
});

// pi math

// let pi = Math.PI
