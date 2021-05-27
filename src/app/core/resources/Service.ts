import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Config } from "@app/config";
import { IService } from "./IService";
import { Options, Mapper } from "./";
import { ErrorService } from "@app/core/error.service";
import { IModel } from "./IModel";
import { IResponse } from "./IResponse";
import { IBody } from "./IBody";

export class Service<T extends IModel, X extends IResponse, Y extends IBody> implements IService<T, X, Y> {
    path: string = '/resourcies';
    url: string;

    constructor(
        public mapper: Mapper<T, X, Y>,
        public http: HttpClient,
        public config: Config,
        public errorService: ErrorService
    ) {
        this.url = config.apiUrl.concat(this.path);
    }

    insert(model: T): Observable<T> {
        return this.http.post<X>(this.url, this.mapper.toBody(model)).pipe(
            map((response: X) => this.mapper.fromResponse(response)),
            catchError(error => this.errorService.handleHttpErrorResponse(error))
        );
    }

    list(filter: Partial<T>, options: Options = new Options()): Observable<T[]> {
        const url = this.url
            .concat(options.toQueryString())
            .concat(this.mapper.toQueryString(filter));
        return this.http.get<X[]>(url).pipe(
            map((response: X[]) => this.mapper.fromResponseArray(response)),
            catchError(error => this.errorService.handleHttpErrorResponse(error))
        );
    }

    get(id: number): Observable<T> {
        const url = this.url
            .concat('/')
            .concat(id.toString());
        return this.http.get<X>(url).pipe(
            map((response: X) => this.mapper.fromResponse(response)),
            catchError(error => this.errorService.handleHttpErrorResponse(error))
        )
    }

    delete(id: number): Observable<void> {
        const url = this.url
            .concat('/')
            .concat(id.toString());
        return this.http.delete<void>(url).pipe(
            catchError(error => this.errorService.handleHttpErrorResponse(error))
        );
    }

    update(id: number, content: Partial<T>): Observable<T> {
       const url = this.url
            .concat('/')
            .concat(id.toString());
        return this.http.put<X>(url, this.mapper.toBody(content)).pipe(
            map((response: X) => this.mapper.fromResponse(response)),
            catchError(error => this.errorService.handleHttpErrorResponse(error))
        );
    }

    deleteSeveral(ids: number[]): Observable<any> {
        const url = this.url;
        const options = {
            headers: new HttpHeaders({'Content-Type': 'application/json'}),
            body: ids
        };
        return this.http.delete<any>(url, options).pipe(
            catchError(error => this.errorService.handleHttpErrorResponse(error))
        );
    }

}