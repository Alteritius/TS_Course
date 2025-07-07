"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Code goes here!
var axios_1 = require("axios");
var credentials_js_1 = require("../credentials.js");
var form = document.querySelector("form");
var addressInput = document.getElementById("address");
function searchAddressHandler(event) {
    event.preventDefault();
    var enteredAddress = addressInput.value;
    var encodedAddress = encodeURIComponent(enteredAddress);
    var url = "https://nominatim.openstreetmap.org/search?q=".concat(encodedAddress, "&format=json&limit=1");
    // send this to google API
    axios_1.default
        .get(url, {
        headers: {
            "User-Agent": "GeolocationApp/1.0 (".concat(credentials_js_1.email, ")"),
        },
    })
        .then(function (response) {
        var _a = response.data[0], lat = _a.lat, lon = _a.lon;
        //   console.log("Latitude: ", lat);
        //   console.log("Longitude: ", lon);
        document.getElementById("map").innerHTML = ""; // clear <p> from <div id="map">
        new ol.Map({
            target: "map",
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM(),
                }),
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([lon, lat]),
                zoom: 16,
            }),
        });
    })
        .catch(function (err) {
        console.log(err);
    });
}
form.addEventListener("submit", searchAddressHandler);
