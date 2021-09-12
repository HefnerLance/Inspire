

    export default class Weather{
        constructor(weatherData){
            this.name= weatherData.name
            this.weather = weatherData.weather[0].description
            this.temp = weatherData.main.temp
            this.highTemp= weatherData.temp_max
            this.lowTemp = weatherData.main[2]
            this.Celcius = Math.round(weatherData.main.temp-273.15)
            this.farenthite = Math.round((this.Celcius* 2) +30)
            

        }

        get Template(){
            return /*html*/`

               
                <div>
                <p class=" text-center">${this.name}</p>
                    <h5 class="card-title text-center">${this.weather}</h5>
                    <p class="card-text text-center">Kelvin: ${this.temp} </p>
                    <p class= "card-text text-center" id="C" onclick="app.weatherController.toggleUnits()">Celsius: ${this.Celcius} </p>
                    <p class= "card-text text-center visually-hidden" id="F" onclick="app.weatherController.toggleBack()">Fahrenheit: ${this.farenthite}</p>
                
                
            </div>
            `
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