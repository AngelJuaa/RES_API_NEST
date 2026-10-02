import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto.js';
import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

// Esta clase sirve para validar los datos cuando queremos EDITAR un libro.
// PartialType toma todas las reglas del formulario de creación (CreateBookDto)
// y las convierte en opcionales, para que solo tengas que enviar los campos que quieres cambiar
export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsString()//revisa que sea un texto
    @IsOptional()//revisa que sea un valor v o f 
    @IsBoolean()//y aqui se supone que hace lo de arriba entonces hay comflicto con el uuid creo no se pero sii noo
    @IsUUID() id?:string
}
