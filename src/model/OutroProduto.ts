import { Produto } from "./Produto";

export class OutroProduto extends Produto{
    //Atributos
    private _descricao: string;

    //Metodo construtor
	constructor(id: number, nome: string, tipo: number, preco: number, descricao: string) {
        super(id, nome, tipo, preco);
		this._descricao = descricao;
	}
    
    //Get e Set
	public get descricao(): string {
		return this._descricao;
	}

	public set descricao(value: string) {
		this._descricao = value;
	}

    //Visualizar
    public visualizar(): void {
        super.visualizar();
        console.log(`Descrição do Produto: ${this._descricao}`);
    }
}
