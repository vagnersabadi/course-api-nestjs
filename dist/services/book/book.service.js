"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_repository_1 = require("./../../mongo/repository/book.repository");
const common_1 = require("@nestjs/common");
let BooksService = class BooksService {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }
    async getAllBooks() {
        const allBooks = await this.bookRepository.getAllBooks();
        if (!allBooks.length)
            throw new common_1.BadRequestException('There are no books registered yet');
        else
            return allBooks;
    }
    async getBookById(bookID) {
        try {
            return await this.bookRepository.findById(bookID);
        }
        catch (e) {
            throw new common_1.BadRequestException('This book does not exist');
        }
    }
    async getBookByName(bookName) {
        return this.bookRepository.findBookByName(bookName);
    }
    async saveBook(newBook) {
        return await this.bookRepository.saveBook(newBook);
    }
    async getBookByAuthorName(authorName) {
        let authorNameArray = authorName.split(' ');
        const foundBooks = await this.bookRepository.getBookByAuthorName(authorNameArray);
        if (foundBooks.length)
            return foundBooks;
        else
            throw new common_1.BadRequestException('No results for this author');
    }
};
BooksService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [book_repository_1.BookRepository])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=book.service.js.map