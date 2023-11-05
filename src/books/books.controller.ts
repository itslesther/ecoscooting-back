import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.entity';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Post()
  create(@Body() body: Book) {
    return this.booksService.create(body);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    // id is transformed from string to number due to new ValidationPipe({ transform: true }) in main.ts
    return this.booksService.findOne({ id });
  }

  @Put()
  update(@Body() body: Book) {
    return this.booksService.update(body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    // id is transformed from string to number due to new ValidationPipe({ transform: true }) in main.ts
    return this.booksService.delete({ id });
  }
}
