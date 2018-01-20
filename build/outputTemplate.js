"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class Client {
    constructor() {
        this.API = 'https://localhost:5555';
        this.createCount = (req) => {
            return rxjs_1.Observable.ajax({ url: `${this.API}/inventory/createCount` });
        };
    }
}
class FirstClass {
    constructor() {
        this.a = 1;
    }
    logDouble() {
        console.log(this.a * 2);
    }
}
