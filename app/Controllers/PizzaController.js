import {
    ProxyState
} from "../AppState.js";
import {
    pizzaService
} from "../Services/PizzaService.js";


// Private
function _draw() {
    let template = ""
    ProxyState.pizzas.forEach(p => template += p.Template)
    document.getElementById("pizzas").innerHTML = template
}

// Public
export default class PizzaController {
    constructor() {
        ProxyState.on("pizzas", _draw)
        _draw()
    }

    createPizza(event) {
        event.preventDefault()
        pizzaService.createPizza({title: event.target.title.value})
    }

    deletePizza(pizzaId) {
        pizzaService.deletePizza(pizzaId)
    }

    

}