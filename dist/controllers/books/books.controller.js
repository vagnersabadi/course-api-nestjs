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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_service_1 = require("./../../services/book/book.service");
const books_model_1 = require("./../../models/books.model");
const common_1 = require("@nestjs/common");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    getAllBooks() {
        return this.booksService.getAllBooks();
    }
    async getBookById(bookID) {
        return await this.booksService.getBookById(bookID);
    }
    async getBookByName(bookName) {
        return await this.booksService.getBookByName(bookName);
    }
    async getBookByAuthorName(authorName) {
        return await this.booksService.getBookByAuthorName(authorName);
    }
    async saveBook(newBook) {
        return await this.booksService.saveBook(newBook);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getAllBooks", null);
__decorate([
    common_1.Get('id/:bookID'),
    __param(0, common_1.Param('bookID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getBookById", null);
__decorate([
    common_1.Get('name/:bookName'),
    __param(0, common_1.Param('bookName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getBookByName", null);
__decorate([
    common_1.Get('author/:authorName'),
    __param(0, common_1.Param('authorName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getBookByAuthorName", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [books_model_1.BookModel]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "saveBook", null);
BooksController = __decorate([
    common_1.Controller('books'),
    __metadata("design:paramtypes", [book_service_1.BooksService])
], BooksController);
exports.BooksController = BooksController;
//# sourceMappingURL=books.controller.js.map