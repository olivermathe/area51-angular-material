import { IModel } from "@app/core/resources/IModel";
import { Age } from "@app/value-objects";

export class Customer implements IModel {

    constructor(
        public id: number,
        public name: string,
        public age: Age
    ) {}

}