import { Component } from '@angular/core';
import { Column, COLUMN_TYPE } from '@app/app-table/column';
import { CustomerDatasource } from '@app/customer';

@Component({ templateUrl: './customers.component.html' })
export class CustomersComponent {

  columns: Column[] = [
    { name: 'id', type: COLUMN_TYPE.TEXT, header: 'ID' },
    { name: 'name', type: COLUMN_TYPE.TEXT, header: 'Name' },
    { name: 'age', type: COLUMN_TYPE.TEXT, header: 'Age' },
    { name: 'status', type: COLUMN_TYPE.TOGGLE, header: 'Inativar | Ativar', toggleOptions: {
      description: 'Cliente'
    }},
  ];

  constructor(public customerDatasource: CustomerDatasource) {}

}
