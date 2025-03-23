import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { IDataServices } from '../../core/abstracts';
import { CreateNoteDto, GetAllNotesDto, UpdateNoteDto } from '../../core/dtos';
import { NoteFactoryService } from './note-factory.service';
import { Note } from 'src/frameworks/data-services/mongo/model';

@Injectable()
export class NoteUseCases {
  constructor(private dataServices: IDataServices, private noteFactoryService: NoteFactoryService) {}

  getAllNotes(query: GetAllNotesDto): Promise<Note[]> {
    const { page, limit, q, sort } = query;

    const conditions = {
      title: { $regex: q, $options: 'i' },
      content: { $regex: q, $options: 'i' },
    };

    return this.dataServices.notes.getAll(conditions);
  }

  getNoteById(id: any): Promise<Note> {
    return this.dataServices.notes.get(id);
  }

  createNote(createNoteDto: CreateNoteDto): Promise<Note> {
    const note = this.noteFactoryService.createNewNote(createNoteDto);
    return this.dataServices.notes.create(note);
  }

  updateNote(noteId: string, updateNoteDto: UpdateNoteDto) {
    const note = this.noteFactoryService.updateNote(updateNoteDto);
    this.dataServices.notes.update(noteId, note);
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
