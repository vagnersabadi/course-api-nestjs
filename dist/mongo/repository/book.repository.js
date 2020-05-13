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
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BookRepository = class BookRepository {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    async getAllBooks() {
        return await this.bookModel.find({}, { __v: false }).sort({ name: +1 }).exec();
    }
    async saveBook(newBook) {
        const createdBook = new this.bookModel(newBook);
        return createdBook.save();
    }
    async findById(bookID) {
        return await this.bookModel.findById(bookID, { __v: false });
    }
    async findBookByName(bookName) {
        return await this.bookModel.find({ name: { '$regex': bookName, '$options': 'i' } }, { __v: false });
    }
    async getBookByAuthorName(authorName) {
        return await this.bookModel.find({
            $or: [
                { "author.name": { $in: authorName } },
                { "author.surname": { $in: authorName } }
            ]
        });
    }
};
BookRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('books')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BookRepository);
exports.BookRepository = BookRepository;
//# sourceMappingURL=book.repository.js.map