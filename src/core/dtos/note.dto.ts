import { IsString, IsOptional, IsDefined } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
export class CreateNoteDto {
  @ApiProperty({
    description: 'The title of the note',
    example: 'My first note',
  })
  @IsString()
  @IsDefined()
  title: string;

  @ApiProperty({
    description: 'The content of the note',
    example: 'This is the content of my first note',
  })
  @IsString()
  @IsOptional()
  content: string;

  @ApiProperty({
    description: 'The slug of the note',
    example: 'my-first-note',
  })
  @IsString()
  @IsOptional()
  slug: string;

  // @IsString()
  // @IsNotEmpty()
  // created_by: string;
}

export class UpdateNoteDto extends PartialType(CreateNoteDto) {}

export class GetAllNotesDto {
  @ApiProperty({
    description: 'The page number',
    example: 1,
  })
  page: number;

  @ApiProperty({
    description: 'The limit of the notes',
    example: 10,
  })
  limit: number;

  @ApiProperty({
    description: 'The query of the notes',
    example: 'my-first-note',
  })
  q: string;

  @ApiProperty({
    description: 'The sort of the notes',
    example: 'created_at',
  })
  sort: string;
}
