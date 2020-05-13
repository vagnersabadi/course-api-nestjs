import { Book } from './../interfaces/book.interface';
import { BookModel } from './../../models/books.model';
import { Injectable } from "@nestjs/common";
import { InjectModel, InjectConnection } from "@nestjs/mongoose";
import { Model, Connection } from 'mongoose';

@Injectable()
export class BookRepository {

    constructor(
        @InjectModel('books') private readonly bookModel: Model<Book>
    ) { }

    // retorna todos livros em ordem alfabetica
    async getAllBooks(): Promise<Book[]> {
        return await this.bookModel.find({}, { __v: false }).sort({ name: + 1 }).exec();
    }

    async saveBook(newBook: BookModel): Promise<Book> {
        const createdBook = new this.bookModel(newBook);
        return createdBook.save();
    }

    async findById(bookID: string): Promise<Book> {
        return await this.bookModel.findById(bookID, { __v: false });
    }

    // async deleteBook(bookID: string): Promise<Book> {
    //     return await this.bookModel.findOneAndDelete({ _id: bookID });
    // }

    // async updateBook(bookID: string, book: BookModel): Promise<Book> {
    //     return await this.bookModel.replaceOne({ _id: bookID }, book);
    // }

    async findBookByName(bookName: string): Promise<Book[]> {
        return await this.bookModel.find({ name: { '$regex': bookName, '$options': 'i' } }, { __v: false });
    }

    async getBookByAuthorName(authorName: string[]): Promise<Book[]> {
        return await this.bookModel.find({
            $or: [
                { "author.name": { $in: authorName } },
                { "author.surname": { $in: authorName } }
            ]

        });
    }

}