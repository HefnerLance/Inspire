import { ValuesController } from "./Controllers/ValuesController.js";
import { weatherController } from "./Controllers/WeatherController.js";

class App {
  weatherController = new weatherController();
  valuesController = new ValuesController();
}

window["app"] = new App();
