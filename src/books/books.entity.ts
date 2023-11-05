import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({
    message: 'Title is required',
  })
  title: string;

  @Column()
  @IsNotEmpty({
    message: 'Author is required',
  })
  author: string;

  @Column()
  @IsNotEmpty({
    message: 'Publication date is required',
  })
  publicationDate: string;
  // @IsNumber(
  //   {
  //     allowNaN: false,
  //     allowInfinity: false,
  //   },
  //   {
  //     message(validationArguments) {
  //       if (typeof validationArguments.value === 'string') {
  //         return 'Publication date must be a number';
  //       }

  //       if (new Date(validationArguments.value).toString() === 'Invalid Date') {
  //         return 'Publication date must be a valid date';
  //       }

  //       return 'Publication date must be a number';
  //     },
  //   },
  // )
  // publicationDate: number;
}
