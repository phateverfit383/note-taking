import { AccountEnity, NoteEnity } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract accounts: IGenericRepository<AccountEnity>;

  abstract notes: IGenericRepository<NoteEnity>;
}
