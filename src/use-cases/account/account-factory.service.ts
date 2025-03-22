import { Injectable } from '@nestjs/common';
import { AccountEnity } from '../../core/entities';
import { CreateAccountDto, UpdateAccountDto } from '../../core/dtos';

@Injectable()
export class AccountFactoryService {
  createNewAccount(dto: CreateAccountDto) {
    const newAccount = new AccountEnity();
    newAccount.email = dto.email;
    newAccount.password = dto.password;
    newAccount.google_id = dto.google_id;
    newAccount.first_name = dto.first_name;
    newAccount.last_name = dto.last_name;

    return newAccount;
  }

  updateAccount(dto: UpdateAccountDto) {
    const updatedAccount = new AccountEnity();
    updatedAccount.email = dto.email;
    updatedAccount.password = dto.password;
    updatedAccount.google_id = dto.google_id;
    updatedAccount.first_name = dto.first_name;
    updatedAccount.last_name = dto.last_name;

    return updatedAccount;
  }
}
