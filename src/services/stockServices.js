import StockItem from "../models/stockItem.js";
import utils from "../utils/index.js";

const createItem = async (name, creatorUser, command, quantity = 0) => {
  const item = await StockItem.create({
    name,
    quantity: Number(quantity),
    creatorUser,
    lastUpdatedUser: creatorUser,
    registers: [
      {
        action: command,
        quantity: quantity,
        user: creatorUser,
      },
    ],
  });

  const message = `
    Item criado com sucesso!
    **Nome**: ${item.name}
    **Quantidade**: ${item.quantity}
    `;
  return message;
};

const addQuantity = async (name, lastUpdatedUser, command, quantity) => {
  const item = await utils.findOneByName(name);
  const itemQuantity = Number(item.quantity);
  const newQuantity = (itemQuantity + quantity).toFixed(2);
  const register = {
    action: command,
    user: lastUpdatedUser,
    quantity: quantity,
  };

  await StockItem.updateOne(
    { name },
    {
      quantity: newQuantity,
      lastUpdatedUser,
      registers: [...item.registers, register],
    }
  );

  const message = `Foi adicionado com sucesso **${quantity}** **${name}** ao estoque. Agora você tem **${newQuantity}** **${name}**.`;

  return message;
};

const removeQuantity = async (name, lastUpdatedUser, command, quantity) => {
  const item = await utils.findOneByName(name);
  const itemQuantity = Number(item.quantity);

  if (quantity > item.quantity) {
    throw new Error(
      `Não foi possível remover. Você tem **${item.quantity} ${name}** em estoque.`
    );
  }

  const newQuantity = (itemQuantity - quantity).toFixed(2);

  const register = {
    action: command,
    user: lastUpdatedUser,
    quantity: quantity,
  };

  await StockItem.updateOne(
    { name },
    {
      quantity: newQuantity,
      lastUpdatedUser,
      registers: [...item.registers, register],
    }
  );

  const message = `Foi removido com sucesso **${quantity}** **${name}** do estoque. Agora você tem **${newQuantity}** **${name}**.`;

  return message;
};

const changeName = async (lastName, newName, user, action) => {
  const item = await utils.findOneByName(lastName);

  const register = {
    action,
    user,
  };

  await StockItem.updateOne(
    { name: lastName },
    {
      name: newName,
      lastUpdatedUser: user,
      registers: [...item.registers, register],
    }
  );

  const message = `Nome alterado com sucesso!`;

  return message;
};

const desactive = async (name, user, action) => {
  const item = await utils.findOneByName(name);

  const register = {
    action,
    user,
  };

  await StockItem.updateOne(
    { name },
    {
      isActive: false,
      lastUpdatedUser: user,
      registers: [...item.registers, register],
    }
  );

  const message = `Item ${name} desativado com sucesso!`;

  return message;
};

const reactive = async (name, user, action) => {
  const item = await utils.findOneByName(name);

  const register = {
    action,
    user,
  };

  await StockItem.updateOne(
    { name },
    {
      isActive: true,
      lastUpdatedUser: user,
      registers: [...item.registers, register],
    }
  );

  const message = `Item ${name} reativado com sucesso!`;

  return message;
};

const getSpecificItem = async (name, details) => {
  const item = await utils.findOneByName(name);
  let message;

  if (details === "true") {
    let registers = "";

    for (const register of item.registers) {
      if (register.quantity) {
        registers += `\nAção: ${register.action}
    Usuário: ${register.user}
    Data: ${utils.normalizeDate(register.createdAt)}
    Quantity: ${register.quantity ? register.quantity : ""}\n`;
      } else {
        registers += `\nAção: ${register.action}
      Usuário: ${register.user}
      Data: ${utils.normalizeDate(register.createdAt)}\n`;
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
    message = `Item: ${item.name} 
    Quantidade atual: ${item.quantity}`;
  }

  return message;
};

const getAllItems = async () => {
  const items = await StockItem.find();

  let message = "";

  for (const item of items) {
    message += `---------------//---------------
    Item: **\`${item.name}\`**
    Quantidade: **\`${item.quantity}\`**\n`;
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
};

export default stockServices;
