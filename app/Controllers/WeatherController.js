import { weatherService } from "../Services/WeatherService.js";

export class weatherController{
    constructor(){
        weatherService.getWeather()

    }
}