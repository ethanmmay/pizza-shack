
import { generateId } from "../Utils/generateId.js";

export default class Pizza {
    constructor({title, id = generateId()}) {
        this.title = title
        this.id = id
    }

    get Template() {
        
        return "method not built"
    }
}
