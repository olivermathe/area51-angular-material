import { IOptions } from "./IOptions";

export class Options implements IOptions {
    constructor(
        public page = 1,
        public limit = 50
    ) {}

    toQueryString(): string {
        return `?page=${this.page}&limit=${this.limit}`;
    }
}