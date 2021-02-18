import {
    ProxyState
} from "../AppState.js";
import {
    toppingService
} from "../Services/ToppingService.js";


// Private
function _draw() {
    let template = ""
    ProxyState.toppings.forEach(p => template += p.Template)
    document.getElementById("pizzas").innerHTML = template
}

// Public
export default class ToppingsController {
    constructor() {
        ProxyState.on("toppings", _draw)
    }

    addTopping(event) {
        event.preventDefault()
        toppingService.addTopping(title: event.target.title.value)
    }

    deleteTopping(toppingId)

    

}