import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '@/classes/controle/ControleLivros';

const controleEditora = new ControleLivro();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { _id } = req.query;
      const tituloLivro = controleEditora.obterLivro(String(_id));
      res.status(200).json({ titulo: tituloLivro });
    } else {
      res.status(405).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}
