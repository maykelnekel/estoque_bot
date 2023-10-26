import StockItem from "../models/stockItem.js";
import database from "../Database/index.js";
import { json } from "express";

const createItem = (name, quantity = 0, creatorData) => {
  const checkIfItemAlreadyExists = database.some((item) => item.name === name);
  let message;
  if (checkIfItemAlreadyExists) {
    throw new Error(
      `O item **${name}** já está cadastrado, escolha outro nome ou altere a quantidade do item com o comando: \`\`\`!estoque adicionar_quantidade <nome_do_item> <quantidade>\`\`\``
    );
  }
  const item = new StockItem(name, quantity, creatorData);
  database.push(item);
  const res = {
    nome: item.name,
    quantidade: item.quantity,
    Criador: item.creatorUser,
    DataDaCriacao: item.creationDate,
    ultimaAtualizacaoo: item.updateDate,
    ultimoUsuarioAtualizador: item.lastUpdatedUser,
  };
  const resJSON = JSON.stringify(res, null, 2);
  message = `O item **${name}** foi cadastrado com sucesso! \`\`\`javascript\n${resJSON}\`\`\``;
  return message;
};

const stockServices = {
  createItem,
};

export default stockServices;
