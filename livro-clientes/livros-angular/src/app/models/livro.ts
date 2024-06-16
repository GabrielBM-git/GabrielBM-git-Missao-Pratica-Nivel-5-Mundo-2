
export class Livro {
    
    _id: string;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];

    constructor();
    constructor(_id: string, codEditora: number, titulo: string, resumo: string, autores: string[]);
    constructor(_id?: string, codEditora?: number, titulo?: string, resumo?: string, autores?: string[]) {
        this._id = _id !== undefined ? _id : '';
        this.codEditora = codEditora !== undefined ? codEditora : 0;
        this.titulo = titulo !== undefined ? titulo : '';
        this.resumo = resumo !== undefined ? resumo : '';
        this.autores = autores !== undefined ? autores : [];
    }
}