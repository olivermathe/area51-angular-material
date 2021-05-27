import { HttpHeaders, HttpParamsOptions } from "@angular/common/http";
import { Observable } from "rxjs";

export interface IHttpMock {
    get<T>(url: string): Observable<any[]>;
    post<T>(url: string, body: any): Observable<any>;
    put<T>(url: string, body: any): Observable<any>;
    delete<T>(url: string, options: { headers: HttpHeaders }): Observable<any>;
}