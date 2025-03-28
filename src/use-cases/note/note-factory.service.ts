import { Injectable } from '@nestjs/common';
import { CreateNoteDto, UpdateNoteDto } from '../../core/dtos';
import { Note } from 'src/frameworks/data-services/mongo/model';
@Injectable()
export class NoteFactoryService {
  createNewNote(createNoteDto: CreateNoteDto) {
    const newNote = new Note();
    newNote.title = createNoteDto.title;
    newNote.content = createNoteDto.content;
    newNote.slug = createNoteDto.title.toLowerCase().trim().replace(/ /g, '-');
    return newNote;
  }

  updateNote(updateNoteDto: UpdateNoteDto) {
    const updatedNote = new Note();
    updatedNote.title = updateNoteDto.title;
    updatedNote.content = updateNoteDto.content;
    updatedNote.slug = updateNoteDto.title.toLowerCase().trim().replace(/ /g, '-');

    return updatedNote;
  }
}
