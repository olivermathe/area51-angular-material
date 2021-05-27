import { HttpHeaders } from "@angular/common/http";
import { IHttpMock } from "@app/core/resources/IHttpMock";
import { pessoa } from "gerador";
import { Observable, of } from "rxjs";
import { CustomerResponse } from "./customer.response";

export class CustomerMock implements IHttpMock {

    data: CustomerResponse[] = new Array(40).fill(null).map((r, i) => {
        return {
            customerFirstName: pessoa.nome(),
            customerAge: getRandomInt(18, 80),
            customerID: i + 1,
        }
    });

    get(url: string): Observable<any> {
        const params = new URL(url).searchParams;
        const page = parseInt(params.get('page') || '1');
        const limit = parseInt(params.get('limit') || '20');
        const customerName = params.get('customerName') || '';
        const start = (page -1) * limit;
        const end = start + limit;
        let response = this.data;
        response = response.filter(d => d.customerFirstName.startsWith(customerName));
        if (response.length > limit) {
            response = response.slice(start, end);
        }
        return of(response);
    }

    post<T>(url: string, body: any): Observable<any> {
        throw new Error("Method not implemented.");
    }

    put<T>(url: string, body: any): Observable<any> {
        throw new Error("Method not implemented.");
    }
    
    delete<T>(url: string, options: { headers: HttpHeaders; body: number[] }): Observable<any> {
        options.body
        this.data = this.data.filter(d => options.body.indexOf(d.customerID) === -1);
        return of({});
    }
    
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}