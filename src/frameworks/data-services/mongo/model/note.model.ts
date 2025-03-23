import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type NoteDocument = HydratedDocument<Note>;

@Schema({ collection: 'notes', timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
export class Note {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  slug: string;

  @Prop()
  created_by: string;
}

export const NoteSchema = SchemaFactory.createForClass(Note);
