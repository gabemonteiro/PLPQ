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
    if  (experience === "inexperience" &&
        (commitment === "undecided" &&
        (time === "1to5" || time === "5to10" || time === "10to20" || time === "20to40"))) {
        $("#resultsStart").toggleClass("hidden");
        $("#resultsStart .name").text(name);
        $("#quiz").hide();
    } else if  (familiar === "windows" || familiar === "macOs" &&
        (experience === "html" || experience === "javascript" || experience === "c#" &&
        (commitment === "hobby" || commitment === "improve" &&
        (time === "1to5" || time === "5to10" || time === "10to20")))) {
        $("#resultsHome").toggleClass("hidden");
        $("#resultsHome .name").text(name);
        $("#resultsHome .experience").text(experience);
        $("#quiz").hide();
    } else if (commitment === "career" &&
          (time ==="20to40")) {
        $("#resultsBootcamp").toggleClass("hidden");
        $("#resultsBootcamp .name").text(name);
        $("#resultsBootcamp .experience").text(experience);
        $("#quiz").hide();
    }
    // debugger;
      event.preventDefault();
      });
    });
