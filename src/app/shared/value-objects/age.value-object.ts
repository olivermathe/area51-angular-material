import { IValueObject } from "@app/core/resources/IValueObject";

export class Age implements IValueObject {

    public value: number;

    constructor(value: number) {
        this.isValidValue(value);
        this.value = value;
    }

    isValidValue(value: number): void {
        if (value <= 0) {
            throw new Error('Invalid age value:' + value)
        }
    }

}