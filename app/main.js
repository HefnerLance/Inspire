import { DateController } from "./Controllers/DateController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { ToDoController } from "./Controllers/ToDoController.js";
import { weatherController } from "./Controllers/WeatherController.js";
class App {
  
  toDoController = new ToDoController();
  dateController = new DateController();
  weatherController = new weatherController();
  imageController = new ImageController();
  quoteController = new QuoteController();

}

window["app"] = new App();
