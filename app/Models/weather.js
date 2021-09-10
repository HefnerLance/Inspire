

    export class weather{
        constructor(weatherData){
            this.coord= weatherData.coord
            this.weatherId = weatherData.weather["id"]

        }
    }
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