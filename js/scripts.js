
function Place(location, season, landmark, note) {
  this.location = location;
  this.season = season;
  this.landmark = landmark;
  this.note = note;
}

Place.prototype.destination = function() {
  return this.location + ": " + this.note;
}


$(document).ready(function() {

  $("form#log").submit(function(event) {
    event.preventDefault();

    var locationInput = $("#location").val();
    var seasonInput = $("#season").val();
    var landmarkInput = $("#landmark").val();
    var noteInput = $("#note").val();

    var newPlace = new Place(locationInput, seasonInput, landmarkInput, noteInput);

    $("ul#outputList").append("<li class='clickable'>" + newPlace.destination() + "</li>");

    // Clear form
    $("input#location").val("");
    $("input#season").val("");
    $("input#landmark").val("");
    $("input#note").val("");

    // Make list items clickable
    $("ul#outputList li").last().click(function() {
      $(".entry").show();
      $(".locationOutput").text(newPlace.location);
      $("#seasonOutput").text(newPlace.season);
      $("#landmarkOutput").text(newPlace.landmark);
      $("#noteOutput").text(newPlace.note);

    });

  });


});
