import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";

@Injectable({
    providedIn: 'root',
    useFactory: () => new Config(environment)
})
export class Config {

    production: boolean = false;
    apiUrl: string = '';

    constructor(env: any) {
        this.production = env.production;
        this.apiUrl = env.apiUrl;
    }

};