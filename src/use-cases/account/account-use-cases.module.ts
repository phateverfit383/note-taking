import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { AccountFactoryService } from './account-factory.service';
import { AccountUseCases } from './account.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [AccountFactoryService, AccountUseCases],
  exports: [AccountFactoryService, AccountUseCases],
})
export class AccountUseCasesModule {}
