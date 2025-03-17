import { Module } from '@nestjs/common';
import { AppController, AccountController } from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { AccountUseCasesModule } from './use-cases/account/account-use-cases.module';

@Module({
  imports: [DataServicesModule, AccountUseCasesModule],
  controllers: [AppController, AccountController],
  providers: [],
})
export class AppModule {}
