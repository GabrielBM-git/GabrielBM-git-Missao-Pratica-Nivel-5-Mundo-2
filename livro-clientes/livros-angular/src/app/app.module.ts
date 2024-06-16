import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LivroListaComponent } from './components/livro-lista/livro-lista.component';
import { LivroDadosComponent } from './components/livro-dados/livro-dados.component';

import { ControleEditoraService } from './services/controle-editora.service';
import { ControleLivrosService } from './services/controle-livros.service';

@NgModule({
  declarations: [
    AppComponent,

    LivroListaComponent,
    LivroDadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule
  ],
  providers: [ 
    ControleEditoraService,
    ControleLivrosService
  ],
  bootstrap: [AppComponent] 
})

export class AppModule { }
