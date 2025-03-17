import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateAccountDto, UpdateAccountDto } from '../core/dtos';
import { AccountUseCases } from '../use-cases/account/account.use-case';

@Controller('api/account')
export class AccountController {
  constructor(private accountUseCases: AccountUseCases) {}

  @Get()
  async getAll() {
    return this.accountUseCases.getAllAccounts();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.accountUseCases.getAccountById(id);
  }

  @Post()
  createAccount(@Body() accountDto: CreateAccountDto) {
    return this.accountUseCases.createAccount(accountDto);
  }

  @Put(':id')
  updateAccount(@Param('id') accountId: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountUseCases.updateAccount(accountId, updateAccountDto);
  }
}
