import { IResponse } from "@app/core/resources/IResponse";

export interface CustomerResponse extends IResponse {
    customerID: number;
    customerAge: number;
    customerFirstName: string;
}