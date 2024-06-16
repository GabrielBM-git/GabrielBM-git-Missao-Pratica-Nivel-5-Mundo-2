// ControleLivros.ts
import axios from 'axios';
import { Livro } from "../modelo/Livro";

const API_URL = 'http://localhost:3001/api/livros';

export class ControleLivro {
    async obterLivros(): Promise<Livro[]> {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error('Erro ao obter livros:', error);
            return [];
        }
    }

    async obterLivro(_id: string): Promise<string> {
        try {
            const response = await axios.get(`${API_URL}/${_id}`);
            const livro = response.data;
            return livro ? livro.titulo : "Livro não encontrado";
        } catch (error) {
            console.error(`Erro ao obter o livro com id ${_id}:`, error);
            return "Livro não encontrado";
        }
    }

    async incluir(livro: Livro): Promise<void> {
        try {
            await axios.post(API_URL, livro);
        } catch (error) {
            console.error('Erro ao incluir livro:', error);
        }
    }

    async excluir(_id: string): Promise<void> {
        try {
            await axios.delete(`${API_URL}/${_id}`);
        } catch (error) {
            console.error(`Erro ao excluir o livro com id ${_id}:`, error);
        }
    }
}
