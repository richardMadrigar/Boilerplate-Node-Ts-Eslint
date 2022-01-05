import { Request, Response } from 'express';

export const login = async (req: Request, res: Response) => {
  try {
    return res.status(200).json('Login OK');
  } catch (error) {
    return res.status(500).json('Internal Server error');
  }
};
