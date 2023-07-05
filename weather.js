const API_KEY = ""

function geoOkay(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

}

function geoErrer() {
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(geoOkay, geoErrer);