"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_service_1 = require("./services/book/book.service");
const book_schema_1 = require("./mongo/schema/book.schema");
const book_repository_1 = require("./mongo/repository/book.repository");
const common_1 = require("@nestjs/common");
const books_controller_1 = require("./controllers/books/books.controller");
const mongoose_1 = require("@nestjs/mongoose");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/biblioteca', { useNewUrlParser: true, useUnifiedTopology: true }),
            mongoose_1.MongooseModule.forFeature([
                { name: 'books', schema: book_schema_1.BookSchema }
            ]),
        ],
        controllers: [
            books_controller_1.BooksController
        ],
        providers: [
            book_service_1.BooksService,
            book_repository_1.BookRepository
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map