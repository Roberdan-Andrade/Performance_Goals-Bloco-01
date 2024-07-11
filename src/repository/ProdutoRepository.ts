import { Produto } from "../model/Produto";

export interface ProdutoRepository{
    //CRUD
    criar(produto: Produto): void;
    listar(): void;
    consultarPorID(id: number): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
}
