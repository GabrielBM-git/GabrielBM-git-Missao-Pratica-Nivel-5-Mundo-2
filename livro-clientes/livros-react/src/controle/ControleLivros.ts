// ControleLivros.ts
import { Livro } from "../modelo/Livro";

export class ControleLivro {
    private apiUrl: string = "http://localhost:3001/api/livros";

    async obterLivros(): Promise<Livro[]> {
        const response = await fetch(this.apiUrl);
        if (!response.ok) {
            throw new Error('Erro ao obter os livros');
        }
        return response.json();
    }

    async incluir(livro: Livro): Promise<void> {
        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(livro)
        });
        if (!response.ok) {
            const errorDetails = await response.text();
            console.error('Detalhes do erro:', errorDetails);
            throw new Error('Erro ao incluir o livro');
        }
    }

    async excluir(id: string): Promise<void> {
        const url = `${this.apiUrl}/${id}`;
        const response = await fetch(url, { method: 'DELETE' });
        if (!response.ok) {
            throw new Error('Erro ao excluir o livro');
        }
    }
}
