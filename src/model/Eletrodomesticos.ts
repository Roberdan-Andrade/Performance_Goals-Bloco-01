import { Produto } from "./Produto";

export class Eletrodomesticos extends Produto{
    //Atributos
    private _peso: number;
    private _garantia: number;

    //Metodo construtor
	constructor(id: number, nome: string, tipo: number, preco: number, peso: number, garantia: number) {
        super(id, nome, tipo, preco);
		this._peso = peso;
		this._garantia = garantia;
	}

    //Get e set
	public get peso(): number {
		return this._peso;
	}

	public get garantia(): number {
		return this._garantia;
	}

	public set peso(value: number) {
		this._peso = value;
	}

	public set garantia(value: number) {
		this._garantia = value;
	}

    //Visualizar
    public visualizar(): void {
        super.visualizar();
        console.log(`Peso do Produto: ${this._peso} kg`);
        console.log(`Tempo de Garantia: ${this._garantia} mes(es)`);
    }
}
