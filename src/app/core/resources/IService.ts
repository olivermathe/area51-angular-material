import { IMapper } from "./IMapper";
import { IOptions } from "./IOptions";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Config } from "@app/config";
import { ErrorService } from "@app/core/error.service";
import { IModel } from "./IModel";
import { IResponse } from "./IResponse";
import { IBody } from "./IBody";

export interface IService<T extends IModel, X extends IResponse, Y extends IBody> {
    url: string;
    path: string;
    mapper: IMapper<T, X, Y>;
    http: HttpClient;
    config: Config;
    errorService: ErrorService;
    list(filter: Partial<T>, options?: IOptions): Observable<T[]>;
    get(id: number): Observable<T>;
    delete(id: number): Observable<any>;
    update(id: number, content: Partial<T>): Observable<T>;
    deleteSeveral(ids: number[]): Observable<any>;
}