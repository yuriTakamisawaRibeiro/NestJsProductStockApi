import { Type } from "class-transformer";
import { IsPositive, IsInt, IsNotEmpty, IsDate } from "class-validator";

export class CreateStockOutputDto {

    @IsPositive()
    @IsInt()
    @IsNotEmpty()
    product_id: number;

    @IsPositive()
    @IsInt()
    @IsNotEmpty()
    quantity: number;
    

    @IsDate()
    @IsNotEmpty()
    @Type(()=> Date)
    date: string;
}
