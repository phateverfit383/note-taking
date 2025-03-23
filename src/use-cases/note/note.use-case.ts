import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { IDataServices } from '../../core/abstracts';
import { CreateNoteDto, GetAllNotesDto, UpdateNoteDto } from '../../core/dtos';
import { NoteFactoryService } from './note-factory.service';
import { Note } from 'src/frameworks/data-services/mongo/model';

@Injectable()
export class NoteUseCases {
  constructor(private dataServices: IDataServices, private noteFactoryService: NoteFactoryService) {}

  getAllNotes(user: any, query: GetAllNotesDto): Promise<Note[]> {
    const { page, limit, q, sort } = query;

    const conditions = {
      created_by: user.id,
      title: { $regex: q, $options: 'i' },
      content: { $regex: q, $options: 'i' },
    };

    return this.dataServices.notes.getAll(conditions);
  }

  async getNoteById(user: any, id: any): Promise<Note> {
    const note = await this.dataServices.notes.get(id);
    if (note.created_by !== user.id) {
      throw new ForbiddenException();
    }
    return note;
  }

  createNote(userId: string, createNoteDto: CreateNoteDto): Promise<Note> {
    const note = this.noteFactoryService.createNewNote(createNoteDto);
    note.created_by = userId;
    return this.dataServices.notes.create(note);
  }

  async updateNote(userId: string, noteId: string, updateNoteDto: UpdateNoteDto) {
    // find note
    const note = await this.dataServices.notes.get(noteId);
    if (!note) {
      throw new NotFoundException('Note not found');
    }
    if (note.created_by !== userId) {
      throw new ForbiddenException();
    }
    const updatedNote = this.noteFactoryService.updateNote(updateNoteDto);
    this.dataServices.notes.update(noteId, updatedNote);
  }

  async deleteNote(userId: string, noteId: string) {
    const note = await this.dataServices.notes.get(noteId);
    if (!note) {
      throw new NotFoundException('Note not found');
    }
    if (note.created_by !== userId) {
      throw new ForbiddenException();
    }
    return this.dataServices.notes.delete(noteId);
  }
}
