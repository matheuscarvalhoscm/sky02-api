import fs from 'fs/promises';
import IAddress from '../interfaces/Address';

const read = async (): Promise<IAddress[]> => {
  const data = await fs.readFile('src/addresses.json', 'utf8');
  const addresses: IAddress[] = JSON.parse(data);

  return addresses;
};

const write = async (address: IAddress[]): Promise<void> => {
  await fs.writeFile('src/addresses.json', JSON.stringify(address));
};

export {
  read,
  write,
}
