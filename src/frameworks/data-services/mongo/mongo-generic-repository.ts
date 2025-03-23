import { FilterQuery, Model, Types } from 'mongoose';
import { IGenericRepository } from '../../../core';
import { getMongoId } from 'src/core/helper/string';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(conditions: FilterQuery<T>): Promise<T[]> {
    return this._repository.find(conditions).populate(this._populateOnFind).exec();
  }

  get(id: any): Promise<T> {
    return this._repository.findById(id).populate(this._populateOnFind).exec() as Promise<T>;
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  async update(id: string, item: T) {
    const _id = getMongoId(id);
    return await this._repository.findByIdAndUpdate(_id, item);
  }
}
