//Business Logic
function Location(country, city, landmark, time, notes) {
  this.Country = country;
  this.City = city;
  this.Landmark = landmark;
  this.Time = time;
  this.Notes = notes;
}


Location.prototype.destination = function() {
  return this.Country + " " + this.City;
}


//User interface Logic
$(document).ready(function() {

  $("#places-visited").submit(function(event) {
    event.preventDefault();

    var countryName = $("input#country").val();
    var cityName = $("input#city").val();
    var landmarkName = $("input#landmark").val();
    var timeName = $("input#time").val();
    var notesName = $("input#notes").val();

    var newLocation = new Location(countryName, cityName, landmarkName, timeName, notesName);

    $("ul#locations").append("<li><span class='location'> <input type='checkbox' name='destination' id='" + newLocation.Country+ "' value='"+ newLocation.Country +"'>" + newLocation.destination() + "</span></li>");

    $(".location").last().click(function() {
      $("#show-location").show();
      $(".country").text(newLocation.Country);
      $(".city").text(newLocation.City);
      $(".landmark").text(newLocation.Landmark);
      $(".time").text(newLocation.Time);
      $(".notes").text(newLocation.Notes);
    });
      $("input#country").val("");
      $("input#city").val("");
      $("input#landmark").val("");
      $("input#notes").val("");
      $("input#time").val("");

      $("p").click(function() {
        $(this).hide();
      });


  });
  $("#remove").click(function() {
    $("input:checkbox[name=destination]:checked").each(function() {
      $("#show-location").hide();
      $(this).parent().parent().remove();
    });
  });
});
