// componentes/LinhaLivro.tsx

import React from 'react';
import { Livro } from '@/classes/modelo/Livro';
import { ControleEditora } from '@/classes/controle/ControleEditora';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  onExcluir: () => void;
}

const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, onExcluir }) => {
  
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    
  const handleExcluir = () => {
    onExcluir();
  };

  return (
    <tr>
        <td className="td-titulo">
            <div className="row">
                <div className="col">
                    {livro.titulo}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-danger btn-sm" onClick={handleExcluir}>Excluir</button>
                </div>
            </div>                
        </td>
        <td className="td-resumo">{livro.resumo}</td> 
        <td>{nomeEditora}</td>
        <td>
            <ul>
                {livro.autores.map((autor, index) => (
                    <li key={index}>{autor}</li>
                ))}
            </ul>
        </td>
    </tr>
  );
};

export default LinhaLivro;
