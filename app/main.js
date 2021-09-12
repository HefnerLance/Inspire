import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { weatherController } from "./Controllers/WeatherController.js";

class App {
   
  weatherController = new weatherController();
  imageController = new ImageController();
  quoteController = new QuoteController();

}

window["app"] = new App();
