import { ProdutoController } from "../controller/ProdutoController";
import { Eletrodomesticos } from "../model/Eletrodomesticos";
import { OutroProduto } from "../model/OutroProduto";
import { Roupa_Acessorios } from "../model/Roupa_Acessorios";

//Trazendo CRUD
const produtos: ProdutoController = new ProdutoController();

//Criando instacias
const p1: Eletrodomesticos = new Eletrodomesticos(produtos.gerarID(), "Geladeira", 1, 2000, 500, 3);

const p2: Roupa_Acessorios = new Roupa_Acessorios(produtos.gerarID(), "Camiseta", 2, 100, 3, 4);

const p3: OutroProduto = new OutroProduto(produtos.gerarID(), "Caderno", 3, 50, "Um caderno simples de 200 folhas");

//Testando visualizar
p1.visualizar();

p2.visualizar();

p3.visualizar();

//Testando criar
produtos.criar(new OutroProduto((produtos.gerarID()), "Lapis", 3, 10, "Um lapis simples"));
produtos.criar(new OutroProduto((produtos.gerarID()), "Estojo", 3, 10, "Um estojo simples"));

//Testando listar
produtos.listar();

//Testando consulta
produtos.consultarPorID(4);

//Testando atualizar
produtos.atualizar(new OutroProduto(4,"Caneta", 3, 15, "Uma caneta simples"));

produtos.consultarPorID(4);

//Testando deletar
produtos.deletar(5);

produtos.listar();
