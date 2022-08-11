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

  return res.status(201).json(result);
};
