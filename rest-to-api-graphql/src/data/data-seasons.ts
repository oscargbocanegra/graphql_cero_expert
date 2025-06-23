import { F1 } from "./data-source.js";

export class SeasonsData extends F1 {
    constructor() {
        super();
        this.baseURL = "https://api.openf1.org /v1/";
    }
}