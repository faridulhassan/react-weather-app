import axios from "axios";


const API_KEY = "7d1cce6061e9a8c365029856d23c8f16";

function populateCityOrLatLngQuery(cityOrLatLng = "") {
  let detectCityOrLatLng;

  if (typeof cityOrLatLng === "object") {
    detectCityOrLatLng = `lat=${cityOrLatLng.lat}&lon=${cityOrLatLng.lng || cityOrLatLng.lon}`;
  } else {
    detectCityOrLatLng = cityOrLatLng;
  }
  return detectCityOrLatLng;
}

// cityName or {lat, lng} object
export async function getCurrentLocationWeather(cityOrLatLng = "") {
  const populatedValue = populateCityOrLatLngQuery(cityOrLatLng);

  try {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${populatedValue}&appid=${API_KEY}&units=metric`
    );
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
}

