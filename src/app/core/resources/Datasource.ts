import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IBody } from "./IBody";
import { IDatasource } from "./";
import { IElement } from "./IElement";
import { IModel } from "./IModel";
import { IOptions } from "./IOptions";
import { IResponse } from "./IResponse";
import { Options } from "./Options";
import { Service } from "./Service";

const page = 0;
const limit = 5;

export class Datasource extends DataSource<IElement> implements IDatasource {
    
    public selecteds: number[] = [];
    public allSelected: boolean = false;
    public filter: Partial<IElement> = {};
    public data = new BehaviorSubject<IElement[]>([]);

    constructor(
        public service: Service<IModel, IResponse, IBody>,
        public options: IOptions = new Options(page, limit)
    ) {
        super();
        this.nextPage();
    }

    connect(): Observable<IElement[]> {
        return this.data.asObservable();
    }

    disconnect(): void {
        return this.data.complete();
    }

    filtrate(filter: Partial<IElement>): void {
        this.filter = filter;
        this.reset();
    }

    nextPage(): void {
        this.options.page++
        this.pull();
    }

    select(element: IElement): void {
        element.selected = true;
        this.selecteds.push(element.id || 0);
    }
    
    deselect(element: IElement): void {
        element.selected = false;
        this.selecteds = this.selecteds.filter(id => id !== element.id);
    }

    selectAll(): void {
        this.setAllSelected(true);
    }

    deselectAll(): void {
        this.setAllSelected(false);
    }

    setAllSelected(allSelected: boolean): void {
        this.allSelected = allSelected;
        this.selecteds = [];
        const newData = this.data.value.map(element => {
            if (allSelected) {
                this.selecteds.push(element.id || 0);
            }
            element.selected = this.allSelected;
            return element;
        });
        this.data.next(newData);
    }

    orderBy(field: string): void {
        throw new Error("Method not implemented.");
    }

    reset(): void {
        this.options.page = 1;
        this.data.next([]);
        this.deselectAll();
        this.pull();
    }

    pull(): void {
        this.service.list(this.filter, this.options)
            .pipe(map((models: IModel[]) => this.toElements(models)))
            .subscribe((elements: IElement[]) => this.data.next(this.data.value.concat(elements)))
    }
        
    toElements(models: IModel[]): IElement[] {
        return models.map(model => {
            if (this.allSelected) {
                this.selecteds.push(model.id || 0);
            }
            return { ...model, selected: this.allSelected };
        })
    }
}