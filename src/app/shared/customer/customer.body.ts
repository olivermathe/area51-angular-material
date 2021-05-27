import { IBody } from "@app/core/resources/IBody";

interface age {
    value: string;
}

export interface CustomerBody extends IBody {
    customerId?: number;
    customerName: string;
    age: age;
}