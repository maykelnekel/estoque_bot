import "dotenv/config";

export const createCommand = {
  name: "criar_item",
  description:
    "Cria um novo item, informando `nome_do_item`, podendo adicionar uma `quantidade_inicial`",
  options: [
    {
      name: "nome_do_item",
      description: "Nome do novo item.",
      required: true,
      type: 3,
    },
    {
      name: "quantidade_inicial",
      description:
        "Quantidade inicial do novo item. Caso não seja informado será zero.",
      required: false,
      type: 3,
    },
  ],
};

export const editName = {
  name: "trocar_nome",
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
  description: "Adiciona uma determinada quantidade ao um item.",
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

export const selectSpecificItemCommand = {
  name: "consultar_item",
  description: "Consulta as informações de um item no estoque.",
  options: [
    {
      name: "nome_do_item",
      description: "Nome do item da busca.",
      required: true,
      type: 3,
    },
    {
      name: "detalhes",
      description: "Traz a lista de informações mais detalhada do item.",
      required: true,
      type: 3,
      choices: [
        { name: "sim", value: "true" },
        { name: "não", value: "false" },
      ],
    },
  ],
};

export const selectAllItemsCommand = {
  name: "consultar_estoque",
  description:
    "Consulta as informações básicas de todos os itens ativos no estoque.",
};

export const relatoryCommand = {
  name: "relatorio",
  description: "Baixa um relatório completo no formato TXT.",
};

export const ajuda = {
  name: "ajuda",
  description: "Descreve a funcionalidade de cada comando do Bot.",
};
