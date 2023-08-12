import { ApiProperty } from '@nestjs/swagger';
import { State } from '@prisma/client';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  @ApiProperty({ required: true })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  price: number;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  createdAt: Date;

  @IsDateString()
  @IsOptional()
  @ApiProperty({ required: false, nullable: true })
  updatedAt: Date | null;

  @IsNotEmpty()
  @ApiProperty({ required: true })
  state: State;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  isSold: boolean;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  subcategoryId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  sellerId: number;

  @IsArray()
  @IsOptional()
  @ApiProperty({ required: false, nullable: true })
  images: string[] | null;
}
