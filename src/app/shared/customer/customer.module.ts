import { HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CustomerDatasource } from "./customer.datasource";
import { CustomerMock } from "./customer.http-mock";
import { CustomerMapper } from "./customer.mapper";
import { CustomerService } from "./customer.service";

@NgModule({
    providers: [
        CustomerMapper,
        CustomerService,
        CustomerDatasource,
        {
            provide: HttpClient,
            useClass: CustomerMock
        }
    ]
})
export class CustomerModule {}