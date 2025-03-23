import { BadRequestException, Injectable } from '@nestjs/common';
import { AccountEnity } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateAccountDto, LoginDto, UpdateAccountDto } from '../../core/dtos';
import { AccountFactoryService } from './account-factory.service';
import { compare } from 'bcrypt';
import { generateAccessToken } from 'src/core/helper/jwt';
@Injectable()
export class AccountUseCases {
  constructor(private dataServices: IDataServices, private accountFactoryService: AccountFactoryService) {}

  getAccountByEmail(email: string): Promise<AccountEnity> {
    return this.dataServices.accounts.findOne({ email });
  }

  getAccountById(id: any): Promise<AccountEnity> {
    return this.dataServices.accounts.get(id);
  }

  async createEmailAccount(createAccountDto: CreateAccountDto): Promise<{ access_token: string }> {
    // check if account already exists
    const account = await this.getAccountByEmail(createAccountDto.email);
    if (account) {
      throw new BadRequestException('Email already exists');
    }
    const newAccount = await this.accountFactoryService.createEmailAccount(createAccountDto);
    const createdAccount = await this.dataServices.accounts.create(newAccount);
    return { access_token: this.generateToken(createdAccount) };
  }

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    const account = await this.getAccountByEmail(loginDto.email);
    if (!account) {
      throw new BadRequestException('Email not found');
    }
    const isPasswordValid = await compare(loginDto.password, account.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid password');
    }
    return { access_token: this.generateToken(account) };
  }

  generateToken(account: AccountEnity) {
    const payload = {
      id: account['_id'],
      email: account.email,
    };
    return generateAccessToken(payload);
  }

  updateAccount(accountId: string, updateAccountDto: UpdateAccountDto) {
    const account = this.accountFactoryService.updateAccount(updateAccountDto);
    this.dataServices.accounts.update(accountId, account);
  }
}
