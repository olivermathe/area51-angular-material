import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Config } from "@app/config";
import { ErrorService } from "@app/core/error.service";
import { Service } from "@app/core/resources";
import { CustomerBody } from "./customer.body";
import { CustomerMapper } from "./customer.mapper";
import { Customer } from "./customer.model";
import { CustomerResponse } from "./customer.response";

@Injectable()
export class CustomerService extends Service<Customer, CustomerResponse, CustomerBody> {
    path: string = '/customers';
    constructor(
        public mapper: CustomerMapper,
        public http: HttpClient,
        public config: Config,
        public errorService: ErrorService
    ) {
        super(mapper, http, config, errorService);
    }
}


