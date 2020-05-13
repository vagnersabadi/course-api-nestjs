import { Book } from './../interfaces/book.interface';
import { BookModel } from './../../models/books.model';
import { Model } from 'mongoose';
export declare class BookRepository {
    private readonly bookModel;
    constructor(bookModel: Model<Book>);
    getAllBooks(): Promise<Book[]>;
    saveBook(newBook: BookModel): Promise<Book>;
    findById(bookID: string): Promise<Book>;
    findBookByName(bookName: string): Promise<Book[]>;
    getBookByAuthorName(authorName: string[]): Promise<Book[]>;
}
