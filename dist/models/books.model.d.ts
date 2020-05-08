import { AuthorModel } from './author.model';
export declare class BookModel {
    readonly name: string;
    readonly author: AuthorModel[];
    readonly language: string;
    readonly releaseYear: number;
    readonly publisher: string;
    readonly pages: number;
}
