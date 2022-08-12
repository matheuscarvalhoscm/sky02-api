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

export const update = async (cep: string, editedAddress: IAddress): Promise<IAddress> => {
  const addresses = await read();
  const index = addresses.findIndex((address) => address.cep === cep);
  addresses.splice(index, 1, editedAddress);
  await write(addresses);
  
  return addresses[index];
};
