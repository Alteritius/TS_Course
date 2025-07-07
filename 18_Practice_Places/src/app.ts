// Code goes here!
import axios from "axios";
import { email } from "../credentials.js";

interface NominatimResponse {
  lat: string;
  lon: string;
  display_name: string;
  [key: string]: any; // Other optional fields
}

declare var ol: any;

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  const encodedAddress = encodeURIComponent(enteredAddress);
  const url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&limit=1`;

  // send this to google API

  axios
    .get<NominatimResponse[]>(url, {
      headers: {
        "User-Agent": `GeolocationApp/1.0 (${email})`,
      },
    })
    .then((response) => {
      const { lat, lon } = response.data[0];
      //   console.log("Latitude: ", lat);
      //   console.log("Longitude: ", lon);
      document.getElementById("map")!.innerHTML = ""; // clear <p> from <div id="map">
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
    .catch((err) => {
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
