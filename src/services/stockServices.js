import "dotenv/config.js";
import StockItem from "../models/stockItem.js";
import utils from "../utils/index.js";

const SEPARATOR = process.env.SEPARATOR;

const createItem = async (server, name, creatorUser, action, quantity) => {
  if (!quantity) {
    quantity = 0;
  }
  let item;

  const stock = await utils.findOneByServer(server);

  const newItem = {
    name,
    quantity: Number(quantity),
    creatorUser,
    lastUpdatedUser: creatorUser,
    registers: [
      {
        action,
        quantity,
        user: creatorUser,
      },
    ],
  };

  if (!stock) {
    item = await StockItem.create({
      server,
      data: [newItem],
    });
  } else {
    stock.data.push(newItem);
    item = await stock.save();
  }
  const message = `
    Item criado com sucesso!
    **Nome**: ${name}
    **Quantidade**: ${quantity}
    `;
  return message;
};

const addQuantity = async (server, name, user, action, quantity) => {
  const item = await utils.findOneByServerAndItemName(server, name);
  const itemQuantity = Number(item.data[0].quantity);
  const newQuantity = (itemQuantity + quantity).toFixed(2);

  await StockItem.updateOne(
    { server, "data.name": name },
    {
      $set: {
        "data.$.quantity": newQuantity,
        "data.$.lastUpdatedUser": user,
        "data.$.updatedAt": new Date(),
      },
      $push: {
        "data.$.registers": {
          action,
          user,
          quantity,
        },
      },
    }
  );
  const message = `Foi adicionado com sucesso **${quantity}** **${name}** ao estoque. Agora você tem **${newQuantity}** **${name}**.`;

  return message;
};

const removeQuantity = async (server, name, user, action, quantity) => {
  const item = await utils.findOneByServerAndItemName(server, name);
  const itemQuantity = Number(item.data[0].quantity);

  if (quantity > itemQuantity) {
    throw new Error(
      `Não foi possível remover. Você tem **${item.quantity} ${name}** em estoque.`
    );
  }

  const newQuantity = (itemQuantity - quantity).toFixed(2);

  await StockItem.updateOne(
    { server, "data.name": name },
    {
      $set: {
        "data.$.quantity": newQuantity,
        "data.$.lastUpdatedUser": user,
        "data.$.updatedAt": new Date(),
      },
      $push: {
        "data.$.registers": {
          action,
          user,
          quantity,
        },
      },
    }
  );

  const message = `Foi removido com sucesso **${quantity}** **${name}** do estoque. Agora você tem **${newQuantity}** **${name}**.`;

  return message;
};

const changeName = async (server, lastName, newName, user, action) => {
  await StockItem.updateOne(
    { server, "data.name": lastName },
    {
      $set: {
        "data.$.name": newName,
        "data.$.lastUpdatedUser": user,
        "data.$.updatedAt": new Date(),
      },
      $push: {
        "data.$.registers": {
          action,
          user,
        },
      },
    }
  );

  const message = `Nome alterado com sucesso!`;

  return message;
};

const desactive = async (server, name, user, action) => {
  await StockItem.updateOne(
    { server, "data.name": name },
    {
      $set: {
        "data.$.isActive": false,
        "data.$.quantity": 0,
        "data.$.lastUpdatedUser": user,
        "data.$.updatedAt": new Date(),
      },
      $push: {
        "data.$.registers": {
          action,
          user,
        },
      },
    }
  );

  const message = `Item ${name} desativado com sucesso!`;

  return message;
};

const deleteOne = async (server, name) => {
  await StockItem.updateOne({ server }, { $pull: { data: { name } } });
  return `Item **${name}** deletado com sucesso.`;
};

const reactive = async (server, name, user, action) => {
  await StockItem.updateOne(
    { server, "data.name": name },
    {
      $set: {
        "data.$.isActive": true,
        "data.$.lastUpdatedUser": user,
        "data.$.updatedAt": new Date(),
      },
      $push: {
        "data.$.registers": {
          action,
          user,
        },
      },
    }
  );

  const message = `Item ${name} reativado com sucesso!`;

  return message;
};

const getSpecificItem = async (server, name, details) => {
  const itemFind = await utils.findOneByServerAndItemName(server, name);
  let item;
  if (itemFind) {
    item = itemFind.data[0];
  }
  let message;

  if (details === "true") {
    let registers = `${SEPARATOR}`;

    for (const register of item.registers) {
      if (register.quantity) {
        registers += `
      **Ação**: ${register.action}
      **Usuário**: ${register.user}
      **Data**: ${utils.normalizeDate(register.createdAt)}
      **Quantidade**: ${register.quantity ? register.quantity : ""}
  ${SEPARATOR}`;
      } else {
        registers += `
      **Ação**: ${register.action}
      **Usuário**: ${register.user}
      **Data**: ${utils.normalizeDate(register.createdAt)}
  ${SEPARATOR}`;
      }
    }
    message = `**Item**: ${item.name} 
  \n**Quantidade atual:** ${item.quantity}
  \n**Última interação:** ${utils.normalizeDate(item.updatedAt)}
  \n**Usuário da última interação:** ${item.lastUpdatedUser}
  \n**Data da criação:** ${utils.normalizeDate(item.createdAt)}
  \n**Usuário da crição:** ${item.creatorUser}
  \n**Registros de ações:**
  ${registers}`;
  } else {
    message = `${SEPARATOR}
    Item: ${item.name} 
    Quantidade atual: ${item.quantity}
${SEPARATOR}`;
  }

  return message;
};

const getAllItems = async (server) => {
  const items = await utils.findOneByServer(server);
  let message = `${SEPARATOR}`;

  for (const item of items.data) {
    message += `
    Item: **${item.name}**
    Quantidade: **${item.quantity}**
${SEPARATOR}`;
  }

  return message;
};

const relatory = async (server) => {
  const items = await utils.findOneByServer(server);
  let message = `${SEPARATOR}`;

  for (const item of items.data) {
    let registers = `${SEPARATOR}`;

    for (const register of item.registers) {
      if (register.quantity) {
        registers += `
      **Ação**: ${register.action}
      **Usuário**: ${register.user}
      **Data**: ${utils.normalizeDate(register.createdAt)}
      **Quantidade**: ${register.quantity ? register.quantity : ""}
  ${SEPARATOR}`;
      } else {
        registers += `
      **Ação**: ${register.action}
      **Usuário**: ${register.user}
      **Data**: ${utils.normalizeDate(register.createdAt)}
  ${SEPARATOR}`;
      }
    }
    message += `
**Item**: ${item.name} 
  \n**Quantidade atual:** ${item.quantity}
  \n**Última interação:** ${utils.normalizeDate(item.updatedAt)}
  \n**Usuário da última interação:** ${item.lastUpdatedUser}
  \n**Data da criação:** ${utils.normalizeDate(item.createdAt)}
  \n**Usuário da crição:** ${item.creatorUser}
  \n**Registros de ações:**
  ${registers}
${SEPARATOR}`;
  }

  return message;
};

const stockServices = {
  createItem,
  addQuantity,
  removeQuantity,
  changeName,
  desactive,
  reactive,
  getSpecificItem,
  getAllItems,
  deleteOne,
  relatory,
};

export default stockServices;
