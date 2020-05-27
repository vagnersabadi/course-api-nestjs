import { Book } from './../../Mongo/Interfaces/book.interface';
import { BooksService } from './../../services/book/book.service';
import { BookModel } from './../../models/books.model';
import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';

// http://localhost:3000/books
@Controller('books')
export class BooksController {

    constructor(
        private readonly booksService: BooksService
    ) { }

    @Get()
    getAllBooks(): Promise<Book[]> {
        return this.booksService.getAllBooks();
    }

    @Get('id/:bookID')
    async getBookById(@Param('bookID') bookID: string) {
        return await this.booksService.getBookById(bookID);
    }

    @Get('name/:bookName')
    async getBookByName(@Param('bookName') bookName: string) {
        return await this.booksService.getBookByName(bookName);
    }

    @Get('author/:authorName')
    async getBookByAuthorName(@Param('authorName') authorName: string) {
        return await this.booksService.getBookByAuthorName(authorName);
    }

    @Post()
    async saveBook(@Body() newBook: BookModel): Promise<Book> {
        return await this.booksService.saveBook(newBook);
    }

    @Delete(':bookID')
    async deleteBook(@Param('bookID') bookID: string) {
        return await this.booksService.deleteBook(bookID);
    }

    @Patch(':bookID')
    async updateBook(@Param('bookID') bookID: string, @Body() book: BookModel) {
        return await this.booksService.updateBook(bookID, book);
    }

}
