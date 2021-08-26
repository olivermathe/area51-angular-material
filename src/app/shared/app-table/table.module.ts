import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material/table";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatIconModule } from "@angular/material/icon";
import { CustomerModule } from "@app/customer";
import { InfiniteScrollDirective } from "./infinite-scroll.directive";
import { TableComponent } from "./table.component";

@NgModule({
    declarations: [
        InfiniteScrollDirective,
        TableComponent
    ],
    imports: [
        CommonModule,
        MatSliderModule,
        MatTableModule,
        CustomerModule,
        MatCheckboxModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule
    ],
    exports: [TableComponent]
})
export class AppTableModule {}