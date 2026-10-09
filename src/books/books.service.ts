import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';
import { Book } from './entities/book.entity.js';
import {v4 as Uuidv4} from 'uuid';

@Injectable()
export class BooksService {
  private books:Book[] = [];
  create(createBookDto: CreateBookDto) {//creamos los libros
    const {titlebook,descriptionbook="",pricebook,isAvailablebook}=createBookDto;//le digo que parametros va a recivir
    const newBook = new Book(Uuidv4(),titlebook,descriptionbook,pricebook,isAvailablebook);//los guarda y los hace formato uuidv4
    this.books.push(newBook);//trae los nuevos valores de el libro
    return newBook;//retorna el nuevo libro creado
  }

  findAll() {
    return this.books;//retorno todos los libros creados
  }

  findOne(id: string): Book {//encontramos un libro por id
    const book = this.books.find((bookItem) => bookItem.id === id);
    if (!book) {//enviamos un error o una salida de error esto si no encuentra el id del libro
      throw new NotFoundException(`Book with ${id} no fund`);
    }
    return book;//retorna el libro encontrado
  }

  update(id: string , updateBookDto: UpdateBookDto) {//actualizamos un libro o una propiedad del libro
    const {titlebook,descriptionbook,pricebook,isAvailablebook} = updateBookDto;//declaramos los parametros que tenemos como estructura de db
    const book = this.findOne(id);//busca por id el libro a actualizar
    book.updateWith({titlebook,descriptionbook,pricebook,isAvailablebook}); //se aplican los nuevos valores a las variables 
    return book;//retorna el libro actualizado
  }

  remove(id: string) {//elimina un libro 
    const book = this.findOne(id);//busca el libro por id
    this.books = this.books.filter((book)=> book.id);//filtra los libros 
    return{//se confirma que se elimino el libro
      status: 200,
      msg:"producto eliminado con exito",
      book: book,
    };
  }
}
