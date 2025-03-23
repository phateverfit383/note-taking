import { Injectable } from '@nestjs/common';
import { AccountEnity } from '../../core/entities';
import { CreateAccountDto, UpdateAccountDto } from '../../core/dtos';
import { hash } from 'bcrypt';
@Injectable()
export class AccountFactoryService {
  async createEmailAccount(dto: CreateAccountDto) {
    const newAccount = new AccountEnity();
    newAccount.email = dto.email;
    newAccount.password = await hash(dto.password, 10);
    newAccount.first_name = dto.first_name;
    newAccount.last_name = dto.last_name;
    newAccount.type = 'email';

    return newAccount;
  }

  updateAccount(dto: UpdateAccountDto) {
    const updatedAccount = new AccountEnity();
    updatedAccount.email = dto.email;
    updatedAccount.password = dto.password;
    updatedAccount.first_name = dto.first_name;
    updatedAccount.last_name = dto.last_name;

    return updatedAccount;
  }
}
