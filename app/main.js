import PizzaController from "./Controllers/PizzaController.js"

class App {
  // valuesController = new ValuesController();
  pizzaController = new PizzaController();
}

window["app"] = new App();
