  
import { IsNotEmpty, ValidateNested, IsNumber, IsString, MinLength, MaxLength, IsPositive, ArrayMinSize, IsObject, IsNotEmptyObject } from 'class-validator';
import { Type } from 'class-transformer';
import { AuthorModel } from './author.model';

export class BookModel {

    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    readonly name : string;

    @IsNotEmpty()
    @ValidateNested({ each : true})
    @Type(() => AuthorModel)
    @ArrayMinSize(1)
    @IsNotEmptyObject({ each: true})
    readonly author: AuthorModel[];

    @IsNotEmpty()
    @IsString()
    readonly language: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly releaseYear: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    readonly publisher: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly pages: number;

}