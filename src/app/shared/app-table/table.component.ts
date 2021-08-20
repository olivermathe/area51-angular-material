import { Component, Input, OnInit } from "@angular/core";
import { Datasource } from "@app/core/resources";
import { IElement } from '@app/core/resources/IElement';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() datasource!: Datasource;
  @Input() displayedColumns: string[] = [];
  @Input() allElementsSelected: boolean = false;
  @Input() selectable: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.selectable) {
      this.displayedColumns.unshift('selected');
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

}
