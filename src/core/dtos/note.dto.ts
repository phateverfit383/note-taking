import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  // @IsString()
  // @IsNotEmpty()
  // created_by: string;
}

export class UpdateNoteDto extends PartialType(CreateNoteDto) {}
