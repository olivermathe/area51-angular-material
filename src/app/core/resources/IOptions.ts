export interface IOptions {
    page: number;
    limit: number;
    toQueryString(): string;
}