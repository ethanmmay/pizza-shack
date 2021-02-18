import {
    generateId
} from "../Utils/generateId.js";

export default class Topping {
    get Template() {
        return /*html*/ `
        <div class="col-4 border-rounded shadow-lg p-3">
            <button class="btn btn-danger d-flex justify-content-end" onclick="app.pizzaController.deletePizza('${this.id}')">X</button>
            <h2>${this.title}</h2>
            <form class="form-inline" onsubmit="app.toppingsController.addTopping(event, '${this.id}')">
            <h4>Add Toppings:</h4>
                <div class="form-group">
                    <input type="text" name="topping" id="topping" class="form-control" placeholder="Toppings" aria-describedby="helpId">
                    <button type="submit" class="btn btn-warning">+</button>
                </div>
            </form>
        </div>
        `
    }
}