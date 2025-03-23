import { Controller, Get, Param, Post, Body, Put, Query, BadRequestException } from '@nestjs/common';
import { CreateAccountDto, LoginDto } from '../core/dtos';
import { AccountUseCases } from '../use-cases/account/account.use-case';

@Controller('api/account')
export class AccountController {
  constructor(private accountUseCases: AccountUseCases) {}

  @Post('/signup')
  async createAccount(@Body() accountDto: CreateAccountDto) {
    const data = await this.accountUseCases.createEmailAccount(accountDto);
    return {
      success: true,
      data,
    };
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const data = await this.accountUseCases.login(loginDto);
    return {
      success: true,
      data,
    };
  }
}
