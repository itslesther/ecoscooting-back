import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './books.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}
  create(book: Book) {
    return this.booksRepository.save(book);
  }

  findAll() {
    return this.booksRepository.find();
  }

  findOne(props: { id: number }) {
    return this.booksRepository.findOneBy({ id: props.id });
  }

  update(book: Book) {
    return this.booksRepository.save(book);
  }

  delete(props: { id: number }) {
    return this.booksRepository.delete({ id: props.id });
  }
}
