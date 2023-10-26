import "dotenv/config";
import Bot from "../app.js";

// Get the game choices from game.js
export const createCommand = {
  name: "estoque",
  description: "Utilizado para controlar o estoque",
  options: [
    {
      name: "criar_item",
      description:
        "Cria um novo item, informando o comando !estoque criar_item <nome> <quantidade_inicial_do_estoque>",
      required: false,
      type: 1,
    },
    {
      name: "editar_nome",
      description:
        "Edita o nome de um item, informando o comando !estoque editar_nome <nome_antigo> <novo_nome>",
      required: false,
      type: 1,
    },
    {
      name: "adicionar_quantidade",
      description:
        "Adição de quantidade, comando !estoque adicionar_quantidade <nome_do_item> <quantidade>",
      required: false,
      type: 1,
    },
    {
      name: "remover_quantidade",
      description:
        "Remoção de quantidade, comando !estoque remover_quantidade <nome_do_item> <quantidade>",
      required: false,
      type: 1,
    },
  ],
};
