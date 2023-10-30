import "dotenv/config";
import stockServices from "../services/stockServices.js";
import middlewares from "../middlewares/index.js";
import utils from "../utils/index.js";

const createItem = async (itr) => {
  try {
    const data = itr.data;
    const dataValues = {};

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }
    const itemName = dataValues.nome_do_item;

    await middlewares.verifyItemAlreadyExists(itemName);

    const command = itr.data.name;

    const user = itr.member.user.username;

    const res = await stockServices.createItem(
      itemName,
      user,
      command,
      dataValues.quantidade
    );
    return res;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

const addQuantity = async (itr) => {
  try {
    const data = itr.data;
    const dataValues = {};

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }
    const itemName = dataValues.nome_do_item;

    const quantity = Number(utils.normalizeNumber(dataValues.quantidade));

    await middlewares.verifyItemExists(itemName);

    const command = itr.data.name;
    const user = itr.member.user.username;
    console.log(typeof dataValues.quantidade);

    const res = await stockServices.addQuantity(
      itemName,
      user,
      command,
      quantity
    );
    return res;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

const removeQuantity = async (itr) => {
  try {
    const data = itr.data;
    const dataValues = {};

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }
    const itemName = dataValues.nome_do_item;
    const quantity = Number(dataValues.quantidade);

    await middlewares.verifyItemExists(itemName);

    const command = itr.data.name;
    const user = itr.member.user.username;

    const res = await stockServices.removeQuantity(
      itemName,
      user,
      command,
      quantity
    );
    return res;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

const changeName = async (itr) => {
  try {
    const data = itr.data;
    const dataValues = {};

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }
    const lastName = dataValues.item_antigo;
    const newName = dataValues.novo_nome;

    await middlewares.verifyItemExists(lastName);
    await middlewares.verifyItemAlreadyExists(newName);

    const command = itr.data.name;
    const user = itr.member.user.username;

    const res = await stockServices.changeName(
      lastName,
      newName,
      user,
      command
    );
    return res;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

const desactive = async (itr) => {
  try {
    const data = itr.data;
    const dataValues = {};

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }
    const name = dataValues.nome_do_item;

    await middlewares.verifyItemExists(name);

    const command = itr.data.name;
    const user = itr.member.user.username;

    const res = await stockServices.desactive(name, user, command);
    return res;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

const reactive = async (itr) => {
  try {
    const data = itr.data;
    const dataValues = {};

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }
    const name = dataValues.nome_do_item;

    await middlewares.verifyItemExists(name, true);

    const command = itr.data.name;
    const user = itr.member.user.username;

    const res = await stockServices.reactive(name, user, command);
    return res;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

const stockControllers = {
  createItem,
  addQuantity,
  removeQuantity,
  changeName,
  desactive,
  reactive,
};

export default stockControllers;
