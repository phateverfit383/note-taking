import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { NoteFactoryService } from './note-factory.service';

@Module({
  imports: [DataServicesModule],
  providers: [NoteFactoryService],
  exports: [NoteFactoryService],
})
export class NoteUseCasesModule {}
