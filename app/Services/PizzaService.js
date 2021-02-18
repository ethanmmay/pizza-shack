import { ProxyState } from "../AppState.js";
import Pizza from "../Models/Pizza.js";

class PizzaService {
  createPizza(rawPizza) {
    ProxyState.pizzas = [new Pizza(rawPizza), ...ProxyState.pizzas]
  }

  deletePizza(pizzaId) {
    ProxyState.pizzas = ProxyState.pizzas.filter(p => p.id != pizzaId)
  }
}

export const pizzaService = new PizzaService();

