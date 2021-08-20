import { Component } from '@angular/core';
import { CustomerDatasource } from '@app/customer';

@Component({ templateUrl: './customers.component.html' })
export class CustomersComponent {

  displayedColumns: string[] = ['id', 'name', 'age'];

  constructor(public customerDatasource: CustomerDatasource) {}

}
