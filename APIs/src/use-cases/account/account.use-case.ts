import { Injectable } from '@nestjs/common';
import { AccountEnity } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateAccountDto, UpdateAccountDto } from '../../core/dtos';
import { AccountFactoryService } from './account-factory.service';

@Injectable()
export class AccountUseCases {
  constructor(private dataServices: IDataServices, private accountFactoryService: AccountFactoryService) {}

  getAllAccounts(): Promise<AccountEnity[]> {
    return this.dataServices.accounts.getAll();
  }

  getAccountById(id: any): Promise<AccountEnity> {
    return this.dataServices.accounts.get(id);
  }

  createAccount(createAccountDto: CreateAccountDto): Promise<AccountEnity> {
    const account = this.accountFactoryService.createNewAccount(createAccountDto);
    return this.dataServices.accounts.create(account);
  }

  updateAccount(accountId: string, updateAccountDto: UpdateAccountDto): Promise<AccountEnity> {
    const account = this.accountFactoryService.updateAccount(updateAccountDto);
    return this.dataServices.accounts.update(accountId, account);
  }
}
