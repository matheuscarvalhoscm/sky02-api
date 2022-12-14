import { Request, Response } from 'express';
import IAddress from '../interfaces/Address';
import * as services from '../services/address';
import StatusCode from '../utils/dictionary';

export const getAddresses = async (_req: Request, res: Response) => {
  try {
    const data: IAddress[] | undefined = await services.getAddresses();
      
    return res.status(StatusCode.OK).json(data);
  } catch (error) {
    return res.status(StatusCode.NOT_FOUND).json({ message: 'Não há endereços cadastrados :(' });
  }
};

export const create = async (req: Request, res: Response) => {
  const address: IAddress = req.body;
  const result = await services.create(address);

  return res.status(StatusCode.CREATED).json(result);
};

export const update = async (req: Request, res: Response) => {
  try {
    const editedAddress: IAddress = req.body;
    const { cep } = req.params;
    const result = await services.update(cep, editedAddress);
  
    return res.status(StatusCode.OK).json(result);
  } catch (error) {
    return res.status(StatusCode.NOT_FOUND).json(error);
  }
};

export const deleteAddress = async (req: Request, res: Response) => {
  try {
    const { cep } = req.params;
    await services.deleteAddress(cep);

    return res.status(StatusCode.OK).json({ message: 'Endereço deletado com sucesso!' });
  } catch (error) {
    return res.status(StatusCode.NOT_FOUND).json(error);
  }
};
