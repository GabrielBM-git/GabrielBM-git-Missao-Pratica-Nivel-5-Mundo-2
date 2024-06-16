import { Component, OnInit } from '@angular/core';
import { Livro } from '../../models/livro';
import { Editora } from '../../models/editora';
import { ControleEditoraService } from '../../services/controle-editora.service';
import { ControleLivrosService } from '../../services/controle-livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {

  livro: Livro = new Livro();
  autoresForm: string = '';
  editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();

    if (this.editoras.length > 0)
      this.livro.codEditora = this.editoras[0].codEditora;
  }

  onEditoraChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.livro.codEditora = Number(target.value);
  }

  incluir(): void {
    this.livro.autores = this.autoresForm.split('\n');
    this.livro.codEditora = Number(this.livro.codEditora);

    this.servLivros.incluir(this.livro)
      .subscribe(
        () => {
          console.log('Livro incluído com sucesso.');
          this.router.navigateByUrl('/lista');
        },
        (error) => {
          console.error('Erro ao incluir livro:', error);
        }
      );
  }
}
