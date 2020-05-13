import { Book } from './../../mongo/interfaces/book.interface';
import { BookRepository } from './../../mongo/repository/book.repository';
import { BookModel } from './../../models/books.model';
export declare class BooksService {
    private readonly bookRepository;
    constructor(bookRepository: BookRepository);
    getAllBooks(): Promise<Book[]>;
    getBookById(bookID: string): Promise<Book>;
    getBookByName(bookName: string): Promise<Book[]>;
    saveBook(newBook: BookModel): Promise<Book>;
    getBookByAuthorName(authorName: string): Promise<Book[]>;
}
