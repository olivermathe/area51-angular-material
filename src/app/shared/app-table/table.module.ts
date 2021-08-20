import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material/table";
import { CustomerModule } from "@app/customer";
import { InfiniteScrollDirective } from "./infinite-scroll.directive";
import { TableComponent } from "./table.component";

@NgModule({
    declarations: [
        InfiniteScrollDirective,
        TableComponent
    ],
    imports: [
        MatSliderModule,
        MatTableModule,
        CustomerModule,
        MatCheckboxModule,
        FormsModule,
        MatButtonModule
    ],
    exports: [TableComponent]
})
export class AppTableModule {}