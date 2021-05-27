import { Injectable } from "@angular/core";
import { Datasource, Options } from "@app/core/resources";
import { CustomerService } from "./customer.service";

@Injectable()
export class CustomerDatasource extends Datasource {
    constructor(public service: CustomerService) {
        super(
            service,
            new Options(1, 5)
        );
    }
}