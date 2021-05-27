import { IBody } from "./IBody";
import { IModel } from "./IModel";
import { IMapper } from "./IMapper";
import { IResponse } from "./IResponse";

export class Mapper<T extends IModel, X extends IResponse, Y extends IBody> implements IMapper<T, X, Y> {
    fromResponse(reponse: X): T {
        throw new Error("Method not implemented.");
    }
    toBody(content: Partial<T>): Y {
        throw new Error("Method not implemented.");
    }
    fromResponseArray(response: X[]): T[] {
        return response.map(r => this.fromResponse(r));
    }
    toQueryString(filter: Partial<T>): string {
        return this.createQueryString(this.toBody(filter));
    }
    createQueryString(body: Y | any): string {
        let queryString = "";
        const keys = Object.keys(body);
        const lastKey = keys[keys.length -1];
        for (const key of keys) {
            if (Object.prototype.hasOwnProperty.call(body, key)) {
                queryString = queryString + key + '=' + body[key];
            }
            if (key !== lastKey) {
                queryString = queryString + '&';
            }
        }
        return queryString;
    }

}