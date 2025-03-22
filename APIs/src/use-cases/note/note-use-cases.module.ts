import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { NoteFactoryService } from './note-factory.service';
import { NoteUseCases } from './note.use-case';
@Module({
  imports: [DataServicesModule],
  providers: [NoteFactoryService, NoteUseCases],
  exports: [NoteFactoryService, NoteUseCases],
})
export class NoteUseCasesModule {}
