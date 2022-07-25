import { Adress } from "./adress";
import { Company } from "./company";
import { Geo } from "./geo";

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Adress;
    phone: string;
    website:string;
    company: Company;

    constructor(id: number = 1, name: string = '', username: string = '', email: string = '', address: Adress = new Adress, phone: string, website: string, company: Company){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.website = website;
        this.company = company;
    }
    
}