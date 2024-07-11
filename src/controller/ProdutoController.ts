import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository{

    //Array de produtos
    private _listaProdutos: Array<Produto> = new Array<Produto>();

    //Gerenciador de IDs
    public ID: number = 0;

    //Metodos
    criar(produto: Produto): void {
        this._listaProdutos.push(produto);
        console.log("\nProduto registrado!\n")
    }

    listar(): void {
        for(let produto of this._listaProdutos){
            produto.visualizar();
        }
    }

    consultarPorID(id: number): void {
        let buscaProduto = this.buscarNoArray(id);
        if(buscaProduto !== null){
            buscaProduto.visualizar();
        } else {
            console.log("\nO Produto Não foi encontrado");
        }
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if(buscaProduto !== null){
            this._listaProdutos[(this._listaProdutos.indexOf(buscaProduto))] = produto;
            console.log("\nO Produto foi atualizado com sucesso!\n");
        } else {
            console.log("\nO Produto não foi encontrado");
        }
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if(buscaProduto !== null){
            this._listaProdutos.splice(this._listaProdutos.indexOf(buscaProduto),1);
            console.log("\nProduto excluido com sucesso!\n");
        } else {
            console.log("\nO Produto não foi encontrado");
        }
    }

    //Auxiliares
    public gerarID(): number{
        return ++this.ID;
    }

    public buscarNoArray(numero: number): Produto | null{
        for(let produto of this._listaProdutos){
            if(produto.id === numero){
                return produto;
            }
        }
        return null;
    }
}
