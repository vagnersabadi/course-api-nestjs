import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';

// http://localhost:3000/books
@Controller('books')
export class BooksController {

    @Get()
    getAllBooks(): string {
        return 'TODOS BOOKS';
    }

    @Post()
    saveBook(@Body() newBook: string) {
        return 'saveBook';
    }

    @Patch()
    updateBook() {
        return 'updateBook';

    }

    @Delete()
    deleteBook() {
        return 'DELETE';

    }


}
