import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../core';
import { MongoGenericRepository } from './mongo-generic-repository';
import { Account, AccountDocument, Note, NoteDocument } from './model';

@Injectable()
export class MongoDataServices implements IDataServices, OnApplicationBootstrap {
  accounts: MongoGenericRepository<Account>;
  notes: MongoGenericRepository<Note>;

  constructor(
    @InjectModel(Account.name)
    private AccountRepository: Model<AccountDocument>,
    @InjectModel(Note.name)
    private NoteRepository: Model<NoteDocument>,
  ) {}

  onApplicationBootstrap() {
    this.accounts = new MongoGenericRepository<Account>(this.AccountRepository);
    this.notes = new MongoGenericRepository<Note>(this.NoteRepository);
  }
}
