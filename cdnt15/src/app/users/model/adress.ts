import { Geo } from "./geo";

export class Adress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;

    constructor(street: string = '', suite: string = '', city: string = '', zipcode: string = '', geo: Geo = new Geo){
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}