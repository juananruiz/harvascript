window.onload = init;

function init() {
  var button = document.getElementById("addButton");
  button.onclick = handleButtonClick;
  loadPlaylist();
}

function handleButtonClick() {
  var cancion = document.getElementById("songTextInput");
  var songName = cancion.value;
  if (songName == "") {
    alert("Introduzca el nombre de una canción");
  } 
  else {
    var playlist = document.getElementById("playlist");
    var li = document.createElement("li");
    li.innerHTML = songName;
    playlist.appendChild(li);
    save(songName);
    cancion.value = "";
    cancion.setAttribute("placeholder" ,"Introduzca otra canción");
    cancion.getFocus;
  }
}
