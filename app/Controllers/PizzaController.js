import {
    ProxyState
} from "../AppState.js";
import {
    pizzaService
} from "../Services/PizzaService.js";
import {
    generateId
} from "../Utils/generateId.js";


// Private
function _draw() {
    let pizzasElem = document.getElementById("pizzas")
    let template = ""
    ProxyState.pizzas.forEach(p => template += p.Template)
}

// Public
export default class PizzaController {
    // constructor() {
    //     // _draw()
    // }

    create(event) {
        console.log('got here')
        event.preventDefault()
        let form = event.target
        let rawPizza = {
            title: form.title.value
        }
        pizzaService.createPizza(rawPizza)
    }

}