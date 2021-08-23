import { Injectable } from "@angular/core";
import { Datasource, Options } from "@app/core/resources";
import { IElement } from "@app/core/resources/IElement";
import { Customer } from "./customer.model";
import { CustomerService } from "./customer.service";

@Injectable()
export class CustomerDatasource extends Datasource {
    constructor(public service: CustomerService) {
        super(
            service,
            new Options(1, 5)
        );
    }

    toElements(customers: Customer[]): IElement[] {
        return customers.map(customer => ({
            selected: false,
            id: customer.id,
            name: customer.name,
            age: customer.age.value,
            status: customer.status
        }))
    }
}