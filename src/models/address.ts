import fs from 'fs/promises';
import IAddress from '../interfaces/Address';

export const getAddresses = async (): Promise<IAddress[]> => {
  const data = await fs.readFile('src/addresses.json', 'utf8');
  const addresses: IAddress[] = JSON.parse(data);

  return addresses;
};
