import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type NoteDocument = Note & Document;

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
