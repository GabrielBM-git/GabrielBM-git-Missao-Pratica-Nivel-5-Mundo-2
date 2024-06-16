import { Injectable } from '@angular/core';

import { Editora } from '../models/editora';

@Injectable({
  providedIn: 'root'
})

export class ControleEditoraService {

  private editoras: Array<Editora> = [
    new Editora(1, "Alta Books"),
    new Editora(2, "Bookman"),
    new Editora(3, "Addison Wesley"),
    new Editora(4, "Pearson")
  ];

  constructor() { }

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}
