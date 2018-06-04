export interface Book {
    id?: string;
    title: string;
    author: string;
    editor?: string;
    gender: string;
    edition?: string;
    year?: number;
    quantity: number;
    available?: number;
}