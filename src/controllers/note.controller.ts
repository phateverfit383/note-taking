import { Controller, Get, Param, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { CreateNoteDto, GetAllNotesDto, UpdateNoteDto } from '../core/dtos';
import { NoteUseCases } from '../use-cases/note/note.use-case';
import { NoteFactoryService } from '../use-cases/note/note-factory.service';

@Controller('api/notes')
export class NoteController {
  constructor(private noteUseCases: NoteUseCases, private noteFactoryService: NoteFactoryService) {}

  @Get()
  async getAll(@Query() query: GetAllNotesDto) {
    return this.noteUseCases.getAllNotes(query);
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.noteUseCases.getNoteById(id);
  }

  @Post()
  async createNote(@Body() noteDto: CreateNoteDto) {
    const note = this.noteFactoryService.createNewNote(noteDto);

    const createdNote = await this.noteUseCases.createNote(note);

    return createdNote;
  }

  @Put(':id')
  updateNote(@Param('id') noteId: string, @Body() updateNoteDto: UpdateNoteDto) {
    const note = this.noteFactoryService.updateNote(updateNoteDto);
    return this.noteUseCases.updateNote(noteId, note);
  }

  @Delete(':id')
  deleteNote(@Param('id') noteId: string) {
    return this.noteUseCases.deleteNote('system', noteId);
  }
}
