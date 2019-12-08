$(document).ready(function() {
  $("button").click(function(event) {

    var name = $("input#name").val();
    var familiar = $("#familiar").val();
    var experience = $("input[type=radio]:checked").val();
    var commitment = $("select#commitment").val();
    var time = $("select#time").val();

    // Check to make sure user has made all selections
    if (name === "" || familiar === "unselected" || experience === "unselected" || commitment === "unselected" || time === "unselected") {
      alert("Please fill out the entire form.")
      event.preventDefault();
      return;
    }

    // 3 Possible Quiz Results
    // Start developing a skill in a language response
    if  (experience === "none" &&
        (commitment === "undecided" &&
        (time === "1to5" || "5to10" || "10to20"))) {
        $("#resultsStart").toggleClass("start");
        $("#resultsStart .name").text(name);
        $("#quiz").hide();
    } else if
        (experience === "html" || "javascript" || "c#" &&
        (commitment === "hobby" || "improve" &&
        (time === "1to5" || "5to10" || "10to20"))) {
        $("#resultsHome").toggleClass("home");
        $("#resultsHome .name").text(name);
        $("#resultsHome .experience").text(experience);
        $("#quiz").hide();
    } else {
        $("#resultsBootcamp").toggleClass("bootcamp");
        $("#resultsBootcamp .name").text(name);
        $("#resultsBootcamp .experience").text(experience);
        $("#quiz").hide();
    }
      event.preventDefault();
      });
    });
