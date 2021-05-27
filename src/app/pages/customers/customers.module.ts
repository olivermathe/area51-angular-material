import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerModule } from "@app/customer";
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { MatTableModule } from "@angular/material/table";
import { MatSliderModule } from '@angular/material/slider';
import { AppTableModule } from '@app/app-table/app-table.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatSliderModule,
    MatTableModule,
    CustomerModule,
    AppTableModule,
    MatCheckboxModule,
    FormsModule,
    MatButtonModule
  ]
})
export class CustomersModule { }
