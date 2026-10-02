import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';

@Controller('books')
export class BooksController { //conenctamos con el servico de libros
  constructor(private readonly booksService: BooksService) {}

  @Post()//registramos o creamos libro 
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();//pedimos al servicio que regrese los libros registrados
  }

  @Get(':id')//busca libro por id
  findOne(@Param('id',ParseUUIDPipe) id: string) {//revisa que sea de uuid y pide al servico que busque el libro del id
    return this.booksService.findOne(id);
  }

  @Patch(':id')//modifica o actualiza 
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateBookDto: UpdateBookDto) {//identifica el libro por su código y le envia los cambios al servicio para actualizarlo
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')//borra el libro
  remove(@Param('id',ParseUUIDPipe) id: string) {//identifica el libro por su código y le ordena al servicio que lo elimine 
    return this.booksService.remove(id);
  }
}
