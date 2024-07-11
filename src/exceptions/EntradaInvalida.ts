export class EntradaInvalida extends Error{

    constructor(message: string){
        super();
        this.name = "Entrada Invalida";
        this.message = message;
    }
}
