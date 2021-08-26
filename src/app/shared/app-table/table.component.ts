import { Component, Input, OnInit } from "@angular/core";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { Datasource } from "@app/core/resources";
import { IElement } from '@app/core/resources/IElement';
import { Column, COLUMN_TYPE } from "./column";
import { of } from "rxjs";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() datasource!: Datasource;
  @Input() allElementsSelected: boolean = false;
  @Input() selectable: boolean = false;
  @Input() deletable: boolean = false;
  @Input() columns: Column[] = [];

  displayedColumns: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(col => col.name);
    this.setControlColumns();
  }

  setControlColumns() {
    if (this.selectable) {
      this.displayedColumns.unshift('selected');
    }
    if (this.deletable) {
      this.displayedColumns.push('delete');
    }
  }

  nextPage() {
    this.datasource.nextPage();
  }

  onChangeAllElementsSelected() {
    this.datasource.setAllSelected(this.allElementsSelected);
  }

  onSelectElement(element: IElement) {
    this.datasource.select(element);
  }

  isText(column: Column): boolean {
    return column.type === COLUMN_TYPE.TEXT
  }

  isToggle(column: Column): boolean {
      return column.type === COLUMN_TYPE.TOGGLE;
  }

  onChange(column: Column, element: any) {
    console.log(column, element);
    const field = column.name
    const description = column.toggleOptions?.description;

    this.showDialog(
        `${element[field] ? 'Ativar' : 'Desativar'} ${description}`,
        `Deseja realmente ${element[field] ? 'ativar' : 'desativar'} ${description}?`,
    ).subscribe((confirm: boolean) => {
      debugger
        if (confirm) {
            this.datasource.service.update(element.id, { [field]: element[field] })
        } else {
            element[field] = !element[field];
        }
    });
  }

  showDialog(title: string, message: string) {
    console.log(title, message);
    return of(true);
  }

}
