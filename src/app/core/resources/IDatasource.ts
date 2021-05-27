import { BehaviorSubject } from "rxjs";
import { IBody } from "./IBody";
import { IElement } from "./IElement";
import { IModel } from "./IModel";
import { IOptions } from "./IOptions";
import { IResponse } from "./IResponse";
import { IService } from "./IService";

export interface IDatasource {
    selecteds: number[];
    allSelected: boolean;
    options: IOptions;
    data: BehaviorSubject<IElement[]>;
    filter: Partial<IElement>;
    service: IService<IModel, IResponse, IBody>;
    filtrate(filter: Partial<IElement>): void;
    nextPage(): void;
    select(element: IElement): void;
    deselect(element: IElement): void;
    selectAll(): void;
    setAllSelected(allSelected: boolean): void;
    orderBy(field: string): void;
    reset(): void;
    pull(): void;
    toElements(models: IModel[]): IElement[];
}