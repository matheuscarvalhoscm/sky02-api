import IAddress from '../interfaces/Address';
import { read, write } from '../utils/functions';

export const getAddresses = async (): Promise<IAddress[]> => {
  const addresses = await read();

  return addresses;
};

export const create = async (address: IAddress): Promise<IAddress> => {
  const addresses = await read();
  addresses.push(address);
  await write(addresses);

  return address;
};
