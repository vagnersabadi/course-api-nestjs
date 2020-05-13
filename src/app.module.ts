import { BooksService } from './services/book/book.service';
import { BookSchema } from './mongo/schema/book.schema';
import { BookRepository } from './mongo/repository/book.repository';
import { Module } from '@nestjs/common';
import { BooksController } from './controllers/books/books.controller';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports:
    [
      // connect BD
      MongooseModule.forRoot('mongodb://localhost/biblioteca', { useNewUrlParser: true, useUnifiedTopology: true }),

      MongooseModule.forFeature(
        [
          { name: 'books', schema: BookSchema }
        ]
      ),
    ],

  controllers:
    [
      BooksController
    ],
  providers:
    [
      BooksService,
      BookRepository
    ],
})
export class AppModule { }
