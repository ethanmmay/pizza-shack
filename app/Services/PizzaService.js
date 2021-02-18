import { ProxyState } from "../AppState.js";
import Pizza from "../Models/Pizza.js";

class PizzaService {
  createPizza(rawPizza) {
    ProxyState.pizzas = [new Pizza(rawPizza), ...ProxyState.pizzas]
    console.log(ProxyState.pizzas)
  }
}

export const pizzaService = new PizzaService();

