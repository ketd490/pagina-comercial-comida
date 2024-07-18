alert("Este sitio web es para brindar informacion sobre nuetros productos");


var visitCounter = localStorage.getItem('visitCounter');

if (visitCounter == null) {
  visitCounter = 0;
  localStorage.setItem('visitCounter', visitCounter);
}

document.getElementById("visit-counter").innerHTML = "Número de visitas: " + visitCounter;

function incrementCounter() {
  visitCounter++;
  localStorage.setItem('visitCounter', visitCounter);
  document.getElementById("visit-counter").innerHTML = "Número de visitas: " + visitCounter;
}

function resetCounter() {
  visitCounter = 0;
  localStorage.setItem('visitCounter', visitCounter);
  document.getElementById("visit-counter").innerHTML = "Número de visitas: " + visitCounter;
}