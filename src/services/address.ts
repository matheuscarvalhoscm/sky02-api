import IAddress from '../interfaces/Address';
import * as model from '../models/address';
import Joi from 'joi';

const addressSchema = Joi.object({
  cep: Joi.required(),
  street: Joi.string().required(),
  district: Joi.string().required(),
  city: Joi.string().required(),
  state: Joi.string().required(),
});

export const getAddresses = async (): Promise<IAddress[] | undefined>  => {
  const address: IAddress[] = await model.getAddresses();
  
  return address;
};

export const create = async (address: IAddress): Promise<IAddress> => {
  const data = await model.create(address);

  return data;
};

export const update = async (cep: string, editedAddress: IAddress): Promise<IAddress> => {
  const { error } = addressSchema.validate(editedAddress);
  const data = await model.update(cep, editedAddress);
  
  if (!data) throw ({ message: 'Endereço não encontrado!'});
  else if (error) throw error;

  return data;
};

export const deleteAddress = async (cep: string): Promise<void> => {
  await model.deleteAddress(cep);
};
