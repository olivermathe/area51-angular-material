import { IBody } from "./IBody";
import { IModel } from "./IModel";
import { IResponse } from "./IResponse";

export interface IMapper<T extends IModel, X extends IResponse, Y extends IBody> {
    fromResponse(reponse: X): T;
    fromResponseArray(response: X[]): T[];
    toBody(content: Partial<T>): Y;
    toQueryString(filter: Partial<T>): string;
    createQueryString(body: Y): string;
}