var plan9 = {
  titulo: "Plan 9 from Outer Space",
  horario: ["3:00pm", "7:00pm", "11:00pm"], 
  genre: "culto",
  starRating: 2
};

var forbiddenPlanet = {
  titulo: "Forbidden Planet",
  horario: ["5:00pm", "9:00pm"], 
  genre: "clásica ciencia ficción",
  starRating: 5
};

function Movie(title, showtimes, genre, rating) {
  this.title = title;
  this.showtimes = showtimes;
  this.genre = genre;
  this.rating = rating;
  this.getNextShowing = function() {
    var now = new Date().getTime();
    for (var i = 0; i < this.showtimes.length; i++) {
      var showtime = getTimeFromString(this.showtimes[i]);
      if (showtime - now > 0) {
        return this.showtime[i];
      }
      return null;
    }
  };
}
