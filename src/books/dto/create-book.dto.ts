import { Type } from "class-transformer";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";



export class CreateBookDto { //la clase es como un filtro de lo que debe de cumplir para poder crearse 
    @IsString() titlebook ! : string //obligamos a que el titl sea un texto sin excepctio
    @IsString()
    @IsOptional() descriptionbook? : string //revisa que sea un texto o que este en blanco ya que es opcional
    @IsNumber()
    @Type(()=>Number) pricebook ! : number;//comprueba qye sea un numero y sino lo combierte a numero siempre y cuando sea un texto
    @IsBoolean() isAvailablebook :boolean;//exigimos que el dato sea un valor v o f
}
