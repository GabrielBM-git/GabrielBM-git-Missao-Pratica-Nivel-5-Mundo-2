import { Component, OnInit } from '@angular/core';

import { Editora } from '../../models/editora';
import { Livro } from '../../models/livro';

import { ControleEditoraService } from '../../services/controle-editora.service';
import { ControleLivrosService } from '../../services/controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})

export class LivroListaComponent implements OnInit {

  public editoras: Array<Editora> = [];
  public livros: Livro[] = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.carregarLivros();
  }

  carregarLivros(): void {
    this.servLivros.obterLivros()
      .subscribe(
        (livros) => {
          this.livros = livros;
        },
        (error) => {
          console.error('Erro ao carregar livros:', error);
        }
      );
  }

  excluir(id: string): void {
    this.servLivros.excluir(id)
      .subscribe(
        () => {
          console.log('Livro excluído com sucesso.');
          this.carregarLivros(); 
        },
        (error) => {
          console.error('Erro ao excluir livro:', error);
        }
      );
  }

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}
