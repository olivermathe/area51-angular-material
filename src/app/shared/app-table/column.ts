export interface ToggleOptions {
    description: string;
}

export interface Column {
    name: string;
    header: string;
    type: COLUMN_TYPE;
    toggleOptions?: ToggleOptions;
}

export enum COLUMN_TYPE {
    TEXT = 'text',
    TOGGLE = 'toggle',
}