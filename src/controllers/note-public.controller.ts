import { Controller, Get, Param, Post, Body, Put, Query, Delete, UseGuards } from '@nestjs/common';
import { GetNotePublicDto } from '../core/dtos';
import { NoteUseCases } from '../use-cases/note/note.use-case';
import { NoteFactoryService } from '../use-cases/note/note-factory.service';

@Controller('api/notes-public')
export class NotePublicController {
  constructor(private noteUseCases: NoteUseCases, private noteFactoryService: NoteFactoryService) {}

  @Get()
  async get(@Query() query: GetNotePublicDto) {
    return this.noteUseCases.getNotesBySlug(query);
  }
}
