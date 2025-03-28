import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController, AccountController, NoteController } from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { AccountUseCasesModule } from './use-cases/account/account-use-cases.module';
import { NoteUseCasesModule } from './use-cases/note/note-use-cases.module';
import { AuthMiddleware } from './core/midleware';
import { NotePublicController } from './controllers/note-public.controller';
@Module({
  imports: [DataServicesModule, AccountUseCasesModule, NoteUseCasesModule],
  controllers: [AppController, AccountController, NoteController, NotePublicController],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
