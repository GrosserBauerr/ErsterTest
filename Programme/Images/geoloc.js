// Inhalt des Scripts geoloc.js:
function holePosition() {
    if (navigator.geolocation) {
    document.getElementById("geoSupported").innerText = "OK - Geolocation wird unterstützt!";
    var options = {
    enableHighAccuracy: true
    }
    navigator.geolocation.getCurrentPosition(showPosition, showError, options);
    } else {
    document.getElementById("geoSupported").innerText = "Geolocation nicht unterstützt!";
    }
    }
    function showPosition(position) {
    document.getElementById("breite").innerHTML = 'Breitengrad: ' + position.coords.latitude;
    document.getElementById("laenge").innerHTML = 'Längengrad: ' + position.coords.longitude;