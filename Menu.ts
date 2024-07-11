import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ProdutoController } from "./src/controller/ProdutoController";
import { Eletrodomesticos } from "./src/model/Eletrodomesticos";
import { Roupa_Acessorios } from "./src/model/Roupa_Acessorios";
import { OutroProduto } from "./src/model/OutroProduto";

export function main() {

    //Variaveis padrão
    let opcao: number;

    let nome: string;
    let ID, tipo, preco: number;

    //Variaveis especificas
    let descricao: string;
    let peso, garantia, tamanho, tecido: number;

    //Tipos disponiveis / Limitadores
    const tipoProdutos = ["Eletrodomesticos", "Roupas e/ou Acessorios", "Outro"];
    const tipoTamanhos = ["PP", "P", "M", "G", "GG", "Outro - (Digitar numero)"];
    const tipoTecidos = ["Couro", "Nylon", "La", "Algodao", "Outro"];

    //Trazendo CRUD
    const produtos: ProdutoController = new ProdutoController();

    //Iniciando loop do menu
    while (true) {
        console.log(colors.fg.whitestrong,
            "*****************************************************");
        console.log("                                                     ");
        console.log(colors.fg.red,
            "             E-COMMERCE THE OLDEST HOUSE             ");
        console.log(colors.fg.whitestrong,
            "                 (THE ASTRAL PLANE)                  ");
        console.log("                                                     ");
        console.log(colors.fg.whitestrong,
            "*****************************************************");
        console.log(colors.reset,
            "                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar Todos os Produtos             ");
        console.log("            3 - Consultar Produto por ID             ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            0 - Sair                                 ");
        console.log("                                                     ");
        console.log(colors.fg.whitestrong,
            "*****************************************************");
        console.log(colors.reset,
            "                                                     ");

        console.log(colors.fg.whitestrong, "Entre com a opção desejada: ", colors.reset);
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.red,
                "\nE-commerce The Oldest House - Bem-vindo ao departamento!",
                colors.reset);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.red, "\n\nCriar Produto\n\n", colors.reset);
                //Perguntas padrão
                console.log(`Digite o Tipo do Produto: `);
                tipo = readlinesync.keyInSelect(tipoProdutos, "", { cancel: false }) + 1;

                console.log(`Digite o Nome do Produto: `);
                nome = readlinesync.question("");

                console.log(`Digite o Preço do Produto: `);
                preco = readlinesync.questionFloat("");

                //Perguntas especificas
                switch (tipo) {
                    case 1:
                        console.log(`Digite o Peso do Produto em Kg (Somente numeros): `);
                        peso = readlinesync.questionInt("");

                        console.log(`Digite o Tempo de Garantia em Meses do Produto (Somente numeros): `)
                        garantia = readlinesync.questionInt("");

                        produtos.criar(new Eletrodomesticos(produtos.gerarID(), nome, tipo, preco, peso, garantia));
                        break;

                    case 2:
                        console.log(`Selecione o Tamanho do Produto: `);
                        tamanho = readlinesync.keyInSelect(tipoTamanhos, "", { cancel: false }) + 1;

                        console.log(`Selecione o Tecido do Produto: `);
                        tecido = readlinesync.keyInSelect(tipoTecidos, "", { cancel: false }) + 1;

                        if (tamanho == 6) {
                            console.log(`Digite o Numero do Produto: `);
                            tamanho = readlinesync.questionInt("");
                        }

                        produtos.criar(new Roupa_Acessorios(produtos.gerarID(), nome, tipo, preco, tamanho, tecido));
                        break;

                    case 3:
                        console.log(`Digite Uma Descrição para o Produto: `);
                        descricao = readlinesync.question("");

                        produtos.criar(new OutroProduto(produtos.gerarID(), nome, tipo, preco, descricao));
                        break;
                }
                keyPress()

                break;

            case 2:
                console.log(colors.fg.red, "\n\nListar Todos os Produtos\n\n", colors.reset);
                produtos.listar();

                keyPress()

                break;

            case 3:
                console.log(colors.fg.red, "\n\nConsultar Produto por ID\n\n", colors.reset);
                console.log("Digite o ID do Produto: ");
                ID = readlinesync.questionInt("");
                produtos.consultarPorID(ID);

                keyPress()

                break;

            case 4:
                console.log(colors.fg.red, "\n\nAtualizar Produto\n\n", colors.reset);
                console.log("Digite o ID do Produto: ");
                ID = readlinesync.questionInt("");
                let produto = produtos.buscarNoArray(ID);

                if (produto !== null){
                    //Perguntas padrão
                    console.log(`Digite o Nome do Produto: `);
                    nome = readlinesync.question("");

                    console.log(`Digite o Preço do Produto: `);
                    preco = readlinesync.questionFloat("");

                    //Perguntas especificas
                    let tipo = produto.tipo
                    switch (tipo) {
                        case 1:
                            console.log(`Digite o Peso do Produto em Kg (Somente numeros): `);
                            peso = readlinesync.questionInt("");
    
                            console.log(`Digite o Tempo de Garantia em Meses do Produto (Somente numeros): `)
                            garantia = readlinesync.questionInt("");
    
                            produtos.atualizar(new Eletrodomesticos(ID, nome, tipo, preco, peso, garantia));
                            break;
    
                        case 2:
                            console.log(`Selecione o Tamanho do Produto: `);
                            tamanho = readlinesync.keyInSelect(tipoTamanhos, "", { cancel: false }) + 1;
    
                            console.log(`Selecione o Tecido do Produto: `);
                            tecido = readlinesync.keyInSelect(tipoTecidos, "", { cancel: false }) + 1;
    
                            if (tamanho == 6) {
                                console.log(`Digite o Numero do Produto: `);
                                tamanho = readlinesync.questionInt("");
                            }
    
                            produtos.atualizar(new Roupa_Acessorios(ID, nome, tipo, preco, tamanho, tecido));
                            break;
    
                        case 3:
                            console.log(`Digite Uma Descrição para o Produto: `);
                            descricao = readlinesync.question("");
    
                            produtos.atualizar(new OutroProduto(ID, nome, tipo, preco, descricao));
                            break;
                    }
                } else {
                    console.log("\nProduto não encontrado\n")
                }
                keyPress()

                break;

            case 5:
                console.log(colors.fg.red, "\n\nApagar Produto\n\n", colors.reset);
                console.log("Digite o ID do Produto: ");
                ID = readlinesync.questionInt("");

                produtos.deletar(ID);

                keyPress()

                break;

            default:
                console.log(colors.fg.red, "\nOpção Inválida!\n", colors.reset);
                keyPress()

                break;
        }
    }

}

//Função com os dados da pessoa desenvolvedora 
export function sobre(): void {
    console.log(colors.fg.whitestrong,
        "\n*****************************************************");
    console.log(colors.reset,
        "Projeto Desenvolvido por: Roberdan Andrade");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log(colors.fg.whitestrong,
        "*****************************************************"
        , colors.reset);
}

//Função para pausar o codigo a cada execução do menu
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
