import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books/books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookService } from './services/book/book.service';
@Module({
  imports:
    [
      // connect BD
      MongooseModule.forRoot('mongodb://localhost/biblioteca', { useNewUrlParser: true, useUnifiedTopology: true })
    ],

  controllers:
    [
      BooksController
    ],
  providers:
    [
      BookService
    ],
})
export class AppModule { }
