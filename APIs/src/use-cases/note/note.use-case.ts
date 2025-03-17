import { Injectable } from '@nestjs/common';
import { IDataServices } from '../../core/abstracts';
import { CreateNoteDto, UpdateNoteDto } from '../../core/dtos';
import { NoteFactoryService } from './note-factory.service';
import { Note } from 'src/frameworks/data-services/mongo/model';

@Injectable()
export class NoteUseCases {
  constructor(private dataServices: IDataServices, private noteFactoryService: NoteFactoryService) {}

  getAllNotes(): Promise<Note[]> {
    return this.dataServices.notes.getAll();
  }

  getNoteById(id: any): Promise<Note> {
    return this.dataServices.notes.get(id);
  }

  createNote(createNoteDto: CreateNoteDto): Promise<Note> {
    const note = this.noteFactoryService.createNewNote(createNoteDto);
    return this.dataServices.notes.create(note);
  }

  updateNote(noteId: string, updateNoteDto: UpdateNoteDto): Promise<Note> {
    const note = this.noteFactoryService.updateNote(updateNoteDto);
    return this.dataServices.notes.update(noteId, note);
  }
}
