$(document).ready(function() {
  $("button").click(function(event) {

    var name = $("input#name").val();
    var familiar = $("#familiar").val();
    var experience = $("input[type=radio]:checked").val();
    var interests = $("#interests").val();
    var color = $("#color-select").val();

    // Check to make sure user has made all selections
    if (name === "" || age === "unselected" || interests === "unselected" || color === "unselected") {
      alert("Please fill out the entire form.")
      event.preventDefault()
      return;
    }


      event.preventDefault()
 });
});
