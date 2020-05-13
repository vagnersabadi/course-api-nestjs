import { Book } from './../../Mongo/Interfaces/book.interface';
import { BooksService } from './../../services/book/book.service';
import { BookModel } from './../../models/books.model';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    getAllBooks(): Promise<Book[]>;
    getBookById(bookID: string): Promise<Book>;
    getBookByName(bookName: string): Promise<Book[]>;
    getBookByAuthorName(authorName: string): Promise<Book[]>;
    saveBook(newBook: BookModel): Promise<Book>;
}
