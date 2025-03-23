import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Query,
  Delete,
  UseGuards,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { CreateNoteDto, GetAllNotesDto, UpdateNoteDto } from '../core/dtos';
import { NoteUseCases } from '../use-cases/note/note.use-case';
import { NoteFactoryService } from '../use-cases/note/note-factory.service';
import { CurrentUser } from 'src/core/decorators/user.decorator';
import { ApiHeaders } from '@nestjs/swagger';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('api/notes')
@ApiHeaders([{ name: 'x-access-token' }])
@UseGuards(AuthGuard)
export class NoteController {
  constructor(private noteUseCases: NoteUseCases, private noteFactoryService: NoteFactoryService) {}

  @Get()
  async getAll(@CurrentUser() user: any, @Query() query: GetAllNotesDto) {
    return this.noteUseCases.getAllNotes(user, query);
  }

  @Get(':id')
  async getById(@CurrentUser() user: any, @Param('id') id: any) {
    return this.noteUseCases.getNoteById(user, id);
  }

  @Post()
  async createNote(@CurrentUser() user: any, @Body() noteDto: CreateNoteDto) {
    const note = this.noteFactoryService.createNewNote(noteDto);
    const createdNote = await this.noteUseCases.createNote(user.id, note);

    return createdNote;
  }

  @Put(':id')
  async updateNote(@CurrentUser() user: any, @Param('id') noteId: string, @Body() updateNoteDto: UpdateNoteDto) {
    const updatedNote = this.noteFactoryService.updateNote(updateNoteDto);
    return this.noteUseCases.updateNote(user.id, noteId, updatedNote);
  }

  @Delete(':id')
  deleteNote(@CurrentUser() user: any, @Param('id') noteId: string) {
    return this.noteUseCases.deleteNote(user.id, noteId);
  }
}
