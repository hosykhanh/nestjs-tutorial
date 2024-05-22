import { MinLength, IsNotEmpty, IsNumber } from 'class-validator';

export class ProductDto {
  @IsNotEmpty({ message: 'categoryId cannot be empty' })
  categoryId?: number;

  @MinLength(5, { message: 'This field must be than 5 charactor' })
  productName?: string;

  @IsNumber()
  price?: number;
}
