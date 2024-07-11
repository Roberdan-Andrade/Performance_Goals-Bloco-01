import { Produto } from "./Produto";

export class Roupa_Acessorios extends Produto {
    //Atributos
    private _tamanho: number;
    private _tecido: number;

    //Metodo construtor
    constructor(id: number, nome: string, tipo: number, preco: number, tamanho: number, tecido: number) {
        super(id, nome, tipo, preco);
        this._tamanho = tamanho;
        this._tecido = tecido;
    }

    //Get e set
    public get tamanho(): number {
        return this._tamanho;
    }

    public get tecido(): number {
        return this._tecido;
    }

    public set tamanho(value: number) {
        this._tamanho = value;
    }

    public set tecido(value: number) {
        this._tecido = value;
    }

    //Visualizar
    public visualizar(): void {
        let tamanho: string = "";
        switch (this._tamanho) {
            case 1:
                tamanho = "PP"
                break;

            case 2:
                tamanho = "P"
                break;

            case 3:
                tamanho = "M"
                break;

            case 4:
                tamanho = "G"
                break;

            case 5:
                tamanho = "GG"
                break;
        }

        let tecido: string = "";
        switch (this._tecido) {
            case 1:
                tecido = "Couro"
                break;

            case 2:
                tecido = "Nylon"
                break;

            case 3:
                tecido = "Lã"
                break;

            case 4:
                tecido = "Algodão"
                break;

            case 5:
                tecido = "Outro"
                break;
        }

        super.visualizar();
        console.log(`Tamanho do Produto: ${tamanho}`);
        console.log(`Tipo de Tecido do Produto: ${tecido}`);
    }
}
