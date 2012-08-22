var lastReportTime = 0;

window.onload = function() {
  var temporizador = setInterval(actualizar, 3000);
};

function actualizar() {
  var url = "http://gumball.wickedlysmart.com?callback=updateSales";
  // Añadimos un parametro random a la url para engañar al navegador de modo que no use la caché
  url = url + "&random=" + (new Date()).getTime();
  // Añadimos la hora del último reporte a la URL para evitar duplicados
  url = url + "&lastreporttime=" + lastReportTime;
  var newScriptElement = document.createElement("script");
  newScriptElement.setAttribute("src", url);
  newScriptElement.setAttribute("id", "jsonp");
  var oldScriptElement = document.getElementById("jsonp");
  var head = document.getElementsByTagName("head")[0];
  if (oldScriptElement == null) {
    head.appendChild(newScriptElement);
  }
  else {
    head.replaceChild(newScriptElement, oldScriptElement);
  }

};

// Unos apuntes para detener el temporizador
function pararTemporizador() {
  temporizador.clearInterval();
};

function updateSales(sales) {
  var salesDiv = document.getElementById("sales");
  for (var i = 0; i < sales.length; i++) {
    sale = sales[i];
    var div = document.createElement("div");
    div.setAttribute("class", "saleItem");
    var tiempo = new Date(sale.time);
    var hora = tiempo.getHours() + ":" + tiempo.getMinutes() + ":" + tiempo.getSeconds();
    div.innerHTML = hora + " - " + sale.name + " ha vendido " + sale.sales + " bolas de chicle";
    // Cuando haya más de 10 hacemos desaparecer el primero y el resto sube
    if (salesDiv.childNodes.length > 20) {
      var oldDiv = salesDiv.firstElementChild;
      salesDiv.removeChild(oldDiv);
    }
    salesDiv.appendChild(div);
  }
  // Esto es para evitar reportes duplicados
  if (sales.length > 0) {
    lastTimeReport = sales[sales.length - 1].time;
  }
};
