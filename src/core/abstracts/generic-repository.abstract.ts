import { FilterQuery } from 'mongoose';

export abstract class IGenericRepository<T> {
  abstract getAll(conditions?: FilterQuery<T>): Promise<T[]>;

  abstract findOne(conditions?: FilterQuery<T>): Promise<T>;

  abstract get(id: string): Promise<T>;

  abstract create(item: T): Promise<T>;

  abstract update(id: string, item: T);

  abstract delete(id: string): Promise<T>;
}
