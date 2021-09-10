import { ImageController } from "./Controllers/ImageController.js";
import { weatherController } from "./Controllers/WeatherController.js";

class App {
  weatherController = new weatherController();
  imageController = new ImageController();

}

window["app"] = new App();
