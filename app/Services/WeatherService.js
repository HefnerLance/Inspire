import { ProxyState } from "../AppState.js";

// @ts-ignore
const weatherApi=axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/weather'
})
function _drawWeather(arg0, _drawWeather) {
    throw new Error("Function not implemented.");
}
class WeatherService{
    constructor(){
        console.log("this is weather service");
    }
    async getWeather(){
        let res= await weatherApi.get("", )
        console.log("the res" , res);
        ProxyState.weather
    }
}

export const weatherService = new WeatherService()


// baseURL = https://bcw-sandbox.herokuapp.com/api/
// weather
// quotes
// images
// YOURNAME/todos


// {
//     "coord": {
//       "lon": -116.2035,
//       "lat": 43.6135
//     },
//     "weather": [{
//       "id": 721,
//       "main": "Haze",
//       "description": "haze",
//       "icon": "50d"
//     }],
//     "base": "stations",
//     "main": {
//       "temp": 298.93,
//       "feels_like": 298.32,
//       "temp_min": 297.86,
//       "temp_max": 302.75,
//       "pressure": 1014,
//       "humidity": 29
//     },
//     "visibility": 9656,
//     "wind": {
//       "speed": 2.06,
//       "deg": 30
//     },
//     "clouds": {
//       "all": 90
//     },
//     "dt": 1631299344,
//     "sys": {
//       "type": 1,
//       "id": 3479,
//       "country": "US",
//       "sunrise": 1631279945,
//       "sunset": 1631325874
//     },
//     "timezone": -21600,
//     "id": 5586437,
//     "name": "Boise",
//     "cod": 200
//   }