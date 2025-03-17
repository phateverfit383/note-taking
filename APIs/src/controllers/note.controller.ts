import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateNoteDto, UpdateNoteDto } from '../core/dtos';
import { NoteUseCases } from '../use-cases/note/note.use-case';
import { NoteFactoryService } from '../use-cases/note/note-factory.service';

@Controller('api/note')
export class NoteController {
  constructor(private noteUseCases: NoteUseCases, private noteFactoryService: NoteFactoryService) {}

  @Get()
  async getAll() {
    return this.noteUseCases.getAllNotes();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.noteUseCases.getNoteById(id);
  }

  @Post()
  async createNote(@Body() noteDto: CreateNoteDto) {
    // const createNoteResponse = new CreateNoteResponseDto();
    try {
      const note = this.noteFactoryService.createNewNote(noteDto);
      const createdNote = await this.noteUseCases.createNote(note);

      // createNoteResponse.success = true;
      // createNoteResponse.createdNote = createdNote;
    } catch (error) {
      // report and log error
      // createNoteResponse.success = false;
    }

    // return createNoteResponse;
  }

  @Put(':id')
  updateNote(@Param('id') noteId: string, @Body() updateNoteDto: UpdateNoteDto) {
    const note = this.noteFactoryService.updateNote(updateNoteDto);
    return this.noteUseCases.updateNote(noteId, note);
  }
}
