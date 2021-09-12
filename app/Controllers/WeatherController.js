import { ProxyState } from "../AppState.js";
import  Weather from "../Models/Weather.js";
import { weatherService } from "../Services/WeatherService.js";

function _drawWeather(weatherData){
    let template=''
    if (ProxyState.weather){
        template= ProxyState.weather.Template
    }
    document.getElementById('weather').innerHTML= template
}
export class weatherController{
    constructor(){
        ProxyState.on('weather', _drawWeather )
        ProxyState.on('temperature', _drawWeather)
        
    }
     getWeather(){
    try {
        weatherService.getWeather()
        
    } catch (error) {
        console.log("weather conroller", error)
    }}
    // getcelcius(){
    //     try {
    //         weatherService.convertTempF()
    //     } catch (error) {
    //         console.log("ur tempy broke" ,error);
    //     }
    // }
}