import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '@/classes/controle/ControleLivros';

const controleEditora = new ControleLivro();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const livros = controleEditora.obterLivros();
      res.status(200).json(livros);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}
