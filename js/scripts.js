$(document).ready(function() {
  $("button").click(function(event) {

    var name = $("input#name").val();
    var familiar = $("#familiar").val();
    var experience = $("input[type=radio]:checked").val();
    var commitment = $("select#commitment").val();
    var time = $("select#time").val();

    // // Check to make sure user has made all selections
    // if (name === "" || age === "unselected" || interests === "unselected" || color === "unselected") {
    //   alert("Please fill out the entire form.")
    //   event.preventDefault()
    //   return;
    // }

    // 3 Possible Quiz Results
    if (familiar === "windows" || "macOs" || "iOs" || "android" &&
        (experience === "html" || "javascript" || "c#" &&
        (commitment === "hobby" || "improve" &&
        (time === "1to5" || "5to10" || "10to20")))) {
        $("#resultsHome").toggleClass(".hidden");
        $("#resultsHome .name").text(name);
        $("#resultsHome .experience").text(experience);
        $("#quiz").hide();
    }
    console.log(experience);
      event.preventDefault()
 });
});
