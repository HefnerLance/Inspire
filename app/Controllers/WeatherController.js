import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather(){
    let template=''
    document.getElementById('weather').innerHTML
}
export class weatherController{
    constructor(){
        weatherService.getWeather()
        ProxyState.on('weather', _drawWeather )

    }
    
}