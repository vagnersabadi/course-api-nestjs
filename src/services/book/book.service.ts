import { Book } from './../../mongo/interfaces/book.interface';
import { BookRepository } from './../../mongo/repository/book.repository';
import { BookModel } from './../../models/books.model';
import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class BooksService {

    constructor(
        private readonly bookRepository: BookRepository
    ) { }

    async getAllBooks(): Promise<Book[]> {
        const allBooks = await this.bookRepository.getAllBooks();
        // cso estiver vazio !0
        if (!allBooks.length)
            throw new BadRequestException('There are no books registered yet');
        else
            return allBooks;
    }

    async getBookById(bookID: string): Promise<Book> {
        try {
            return await this.bookRepository.findById(bookID);
        } catch (e) {
            throw new BadRequestException('This book does not exist');
        }
    }

    async getBookByName(bookName: string): Promise<Book[]> {
        return this.bookRepository.findBookByName(bookName);
    }

    async saveBook(newBook: BookModel): Promise<Book> {
        return await this.bookRepository.saveBook(newBook);
    }

    async deleteBook(bookID: string) {

        try {
            const bookExists = await this.bookRepository.findById(bookID);

            if (bookExists) {
                const deletedBook = await this.bookRepository.deleteBook(bookID);

                if (deletedBook)
                    return 'This book was deleted successfully';

            } else {
                throw new BadRequestException('This book does not exist');
            }

        } catch (e) {
            throw new BadRequestException('This book does not exist');
        }

    }

    async updateBook(bookID: string, book: BookModel) {

        try {
            const bookExists = await this.bookRepository.findById(bookID);

            if (bookExists) {
                const updatedBook = await this.bookRepository.updateBook(bookID, book);

                if (updatedBook)
                    return 'This book was updated successfully';

            } else {
                throw new BadRequestException('This book does not exist');
            }

        } catch (e) {
            throw new BadRequestException('This book does not exist');
        }

    }

    async getBookByAuthorName(authorName: string): Promise<Book[]> {

        let authorNameArray = authorName.split(' ');

        const foundBooks = await this.bookRepository.getBookByAuthorName(authorNameArray);

        if (foundBooks.length)
            return foundBooks;
        else
            throw new BadRequestException('No results for this author');

    }

}
