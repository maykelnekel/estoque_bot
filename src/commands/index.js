import "dotenv/config";

export const createCommand = {
  name: "criar_item",
  description:
    "Cria um novo item informando seu nome e opicionalmente podendo adicionar uma quantidade inicial.",
  options: [
    {
      name: "nome_do_item",
      description: "Nome do novo item.",
      required: true,
      type: 3,
    },
    {
      name: "quantidade",
      description:
        "Quantidade inicial do novo item. Caso não seja informado será zero.",
      required: false,
      type: 3,
    },
  ],
};

export const editCommand = {
  name: "editar_item",
  description: "Edita o nome de um item no estoque.",
  options: [
    {
      name: "item_antigo",
      description: "Nome do item a ser alterado.",
      required: true,
      type: 3,
    },
    {
      name: "novo_nome",
      description: "Novo nome para o item.",
      required: true,
      type: 3,
    },
  ],
};

export const addCommand = {
  name: "adicionar",
  description: "Adiciona uma determinada quantidade à um item no estoque.",
  options: [
    {
      name: "quantidade",
      description: "Quantidade a ser adicionada.",
      required: true,
      type: 3,
    },
    {
      name: "nome_do_item",
      description: "Nome do item que receberá mais quantidade.",
      required: true,
      type: 3,
    },
  ],
};

export const removeCommand = {
  name: "remover",
  description: "Remove uma determinada quantidade de um item no estoque.",
  options: [
    {
      name: "quantidade",
      description: "Quantidade a ser emovida.",
      required: true,
      type: 3,
    },
    {
      name: "nome_do_item",
      description: "Nome do item que terá quantidade removida.",
      required: true,
      type: 3,
    },
  ],
};

export const deleteCommand = {
  name: "deletar_item",
  description: "Remove as quantidades um item do estoque e o deixa desativado.",
  options: [
    {
      name: "nome_do_item",
      description: "Nome do item que será desativado.",
      required: true,
      type: 3,
    },
  ],
};

export const reactiveItemCommand = {
  name: "reativar_item",
  description: "Reativa um item que foi deletado anteriormente.",
  options: [
    {
      name: "nome_do_item",
      description: "Nome do item que será reativado.",
      required: true,
      type: 3,
    },
    {
      name: "quantidade",
      description:
        "Quantidade a ser adicionada. Caso não seja informado será zero.",
      required: false,
      type: 3,
    },
  ],
};

export const ajuda = {
  name: "ajuda",
  description: "Descreve a funcionalidade de cada comando do Bot.",
};
