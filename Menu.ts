import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

    //Variaveis padrão
    let opcao: number;

    //Variaveis especificas

    //Tipos disponiveis / Limitadores

    //Trazendo CRUD

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
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log(colors.fg.whitestrong,
                    "*****************************************************");
        console.log(colors.reset,
                    "                                                     ");

        console.log(colors.fg.whitestrong, "Entre com a opção desejada: ", colors.reset);
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.red,
                "\nE-commerce The Oldest House - Bem-vindo ao departamento!",
                colors.reset);
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.red, "\n\nCriar Produto\n\n", colors.reset);

                keyPress()

                break;

            case 2:
                console.log(colors.fg.red, "\n\nListar Todos os Produtos\n\n", colors.reset);

                keyPress()

                break;

            case 3:
                console.log(colors.fg.red, "\n\nConsultar Produto por ID\n\n", colors.reset);

                keyPress()

                break;

            case 4:
                console.log(colors.fg.red, "\n\nAtualizar Produto\n\n", colors.reset);
                   
                keyPress()

                break;

            case 5:
                console.log(colors.fg.red, "\n\nApagar Produto\n\n", colors.reset);

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
