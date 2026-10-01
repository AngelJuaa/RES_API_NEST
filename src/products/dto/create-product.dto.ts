import { Type } from "class-transformer"; //es el que valida la información entre la base y el servicio 
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
@IsString() 
name ! : string
@IsString()
@IsOptional()
description? : string
@IsNumber()

@Type(()=>Number)
price!: number;

}