import { Injectable } from "@angular/core";
import { Mapper } from "@app/core/resources";
import { Age } from "@app/value-objects";
import { CustomerBody } from "./customer.body";
import { Customer } from "./customer.model";
import { CustomerResponse } from "./customer.response";

@Injectable()
export class CustomerMapper extends Mapper<Customer, CustomerResponse, CustomerBody> {
    fromResponse(response: CustomerResponse): Customer {
        return new Customer(
            response.customerID,
            response.customerFirstName,
            new Age(response.customerAge)
        );
    }
    toBody(content: Partial<Customer>): CustomerBody {
        return {
            customerId: content.id,
            customerName: content.name || '',
            age: {
                value: content.age?.value.toString() || ''
            }
        }
    }
}