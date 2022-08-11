import IAddress from '../interfaces/Address';
import * as model from '../models/address';

export const getAddresses = async (): Promise<IAddress[] | undefined>  => {
  const address: IAddress[] = await model.getAddresses();
  
  return address;
};
