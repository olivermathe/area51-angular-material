import { Component, OnInit } from '@angular/core';
import { CustomerDatasource, CustomerService } from '@app/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  displayedColumns: string[] = ['selected', 'id', 'name', 'age'];

  constructor(
    public customerDatasource: CustomerDatasource,
    public customerService: CustomerService
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  deleteSelected() {
    console.log(2234)
    this.customerService.deleteSeveral(this.customerDatasource.selecteds)
      .subscribe(() => {
        this.customerDatasource.reset()
      });
  }

}
