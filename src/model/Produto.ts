export abstract class Produto {
	//Atributos
	private _id: number;
	private _nome: string;
	private _tipo: number;
	private _preco: number;

	//Metodo construtor
	constructor(id: number, nome: string, tipo: number, preco: number) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
		this._preco = preco;
	}

	//Get e set
	public get id(): number {
		return this._id;
	}

	public get nome(): string {
		return this._nome;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get preco(): number {
		return this._preco;
	}

	public set id(value: number) {
		this._id = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set preco(value: number) {
		this._preco = value;
	}

	//Visualizar
	public visualizar(): void {
		let tipo: string = "";
		switch (this._tipo) {
			case 1:
				tipo = "Eletrodomesticos"
				break;

			case 2:
				tipo = "Roupa/Acessorios"
				break;

			case 3:
				tipo = "Veiculo"
				break;
				
			case 4:
				tipo = "Outro"
				break;
		}

		console.log(`\n******************************`);
		console.log(`Dados do Produto:`);
		console.log(`******************************\n`);
		console.log(`ID do Produto: ${this._id}`);
		console.log(`Nome do Produto: ${this._nome}`);
		console.log(`Tipo do Produto: ${tipo}`);
		console.log(`Preço do Produto: R$${this._preco.toFixed(2)}`);
	}
}
