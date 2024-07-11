import { Produto } from "./Produto";

export class Veiculos extends Produto {
    //Atributos
    private _tipoVeiculo: number;
    private _ano: number;
    private _cor: string;
    private _velocidade: number;
    private _usado: number;

    //Metodo construtor
    constructor(id: number, nome: string, tipo: number, preco: number, tipoVeiculo: number, ano: number, cor: string, velocidade: number, usado: number) {
        super(id, nome, tipo, preco);
        this._tipoVeiculo = tipoVeiculo;
        this._ano = ano;
        this._cor = cor;
        this._velocidade = velocidade;
        this._usado = usado;
    }

    //Get e Set
    public get tipoVeiculo(): number {
        return this._tipoVeiculo;
    }

    public get ano(): number {
        return this._ano;
    }

    public get cor(): string {
        return this._cor;
    }

    public get velocidade(): number {
        return this._velocidade;
    }

    public get usado(): number {
        return this._usado;
    }

    public set tipoVeiculo(value: number) {
        this._tipoVeiculo = value;
    }

    public set ano(value: number) {
        this._ano = value;
    }

    public set cor(value: string) {
        this._cor = value;
    }

    public set velocidade(value: number) {
        this._velocidade = value;
    }

    public set usado(value: number) {
        this._usado = value;
    }

    //Visualizar
    public visualizar(): void {
        let tipoVeiculo: string = "";
        let qualVelocidade = "";
        switch (this._tipoVeiculo) {
            case 1:
                tipoVeiculo = "Carro";
                qualVelocidade = "Km/h"
                break;

            case 2:
                tipoVeiculo = "Moto"
                qualVelocidade = "Km/h"
                break;

            case 3:
                tipoVeiculo = "Barco"
                qualVelocidade = "nós"
                break;

            case 4:
                tipoVeiculo = "Avião"
                qualVelocidade = "nós"
                break;
        }

        let usado: string = "";
        switch (this._usado) {
            case 1:
                usado = "Sim"
                break;

            case 2:
                usado = "Não"
                break;
        }

        super.visualizar();
        console.log(`Tipo de Veiculo: ${tipoVeiculo}`);
        console.log(`Ano de Fabricação do Veiculo: ${this._ano}`);
        console.log(`Cor do Veiculo: ${this._cor}`);
        console.log(`Velocidade Maxima do Veiculo: ${this._velocidade} ${qualVelocidade}`);
        console.log(`Veiculo Usado: ${usado}`);
    }
}
