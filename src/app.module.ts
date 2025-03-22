import { Module } from '@nestjs/common';
import { AppController, AccountController, NoteController } from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { AccountUseCasesModule } from './use-cases/account/account-use-cases.module';
import { NoteUseCasesModule } from './use-cases/note/note-use-cases.module';

@Module({
  imports: [DataServicesModule, AccountUseCasesModule, NoteUseCasesModule],
  controllers: [AppController, AccountController, NoteController],
  providers: [],
})
export class AppModule {}
