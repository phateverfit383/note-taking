import { Types } from 'mongoose';

export const getMongoId = (id?: string): Types.ObjectId => {
  return new Types.ObjectId(id);
};
