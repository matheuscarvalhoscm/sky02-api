import IAddress from '../interfaces/Address';
import * as model from '../models/address';

export const getAddresses = async (): Promise<IAddress[] | undefined>  => {
  const address: IAddress[] = await model.getAddresses();
  
  return address;
};

export const create = async (address: IAddress): Promise<IAddress> => {
  const data = await model.create(address);

  return data;
};
