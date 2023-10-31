import "dotenv/config";
import stockServices from "../services/stockServices.js";
import middlewares from "../middlewares/index.js";
import utils from "../utils/index.js";

const createItem = async (itr) => {
  try {
    const data = itr.data;

    const dataValues = {};
    const server = itr.MODEL_NAME;

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }
    const itemName = dataValues.nome_do_item;
    const quantity = Number(
      utils.normalizeNumber(dataValues.quantidade_inicial)
    );
    await middlewares.verifyItemAlreadyExists(server, itemName);

    const command = itr.data.name;

    const user = itr.member.user.username;

    const res = await stockServices.createItem(
      server,
      itemName,
      user,
      command,
      quantity
    );
    return res;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

const addQuantity = async (itr) => {
  try {
    const data = itr.data;
    const server = itr.MODEL_NAME;

    const dataValues = {};

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }
    const itemName = dataValues.nome_do_item;

    const quantity = Number(utils.normalizeNumber(dataValues.quantidade));

    await middlewares.verifyItemExists(server, itemName);

    const command = itr.data.name;
    const user = itr.member.user.username;

    const res = await stockServices.addQuantity(
      server,
      itemName,
      user,
      command,
      quantity
    );
    return res;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

const removeQuantity = async (itr) => {
  try {
    const data = itr.data;
    const server = itr.MODEL_NAME;
    const dataValues = {};

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }
    const itemName = dataValues.nome_do_item;
    const quantity = Number(dataValues.quantidade);

    await middlewares.verifyItemExists(server, itemName);

    const command = itr.data.name;
    const user = itr.member.user.username;

    const res = await stockServices.removeQuantity(
      server,
      itemName,
      user,
      command,
      quantity
    );
    return res;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

const changeName = async (itr) => {
  try {
    const data = itr.data;
    const server = itr.MODEL_NAME;
    const dataValues = {};

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }
    const lastName = dataValues.item_antigo;
    const newName = dataValues.novo_nome;

    await middlewares.verifyItemExists(server, lastName);
    await middlewares.verifyItemAlreadyExists(server, newName);

    const command = itr.data.name;
    const user = itr.member.user.username;

    const res = await stockServices.changeName(
      server,
      lastName,
      newName,
      user,
      command
    );
    return res;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

const desactive = async (itr) => {
  try {
    const data = itr.data;
    const server = itr.MODEL_NAME;

    const dataValues = {};

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }
    const name = dataValues.nome_do_item;

    await middlewares.verifyItemExists(server, name);

    const command = itr.data.name;
    const user = itr.member.user.username;

    const res = await stockServices.desactive(server, name, user, command);
    return res;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};
const deleteOne = async (itr) => {
  try {
    const data = itr.data;
    const server = itr.MODEL_NAME;

    const dataValues = {};

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }
    const name = dataValues.nome_do_item;

    await middlewares.verifyItemExists(server, name);

    const res = await stockServices.deleteOne(server, name);
    return res;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};
const reactive = async (itr) => {
  try {
    const data = itr.data;
    const server = itr.MODEL_NAME;

    const dataValues = {};

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }
    const name = dataValues.nome_do_item;

    await middlewares.verifyItemExists(server, name, true);

    const command = itr.data.name;
    const user = itr.member.user.username;

    const res = await stockServices.reactive(server, name, user, command);
    return res;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

const getSpecificItem = async (itr) => {
  try {
    const data = itr.data;
    const server = itr.MODEL_NAME;

    const dataValues = {};

    for (const opt of data.options) {
      dataValues[opt.name] = opt.value;
    }
    const name = dataValues.nome_do_item;
    const details = dataValues.detalhes;

    await middlewares.verifyItemExists(server, name);

    const res = await stockServices.getSpecificItem(server, name, details);
    return res;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

const getAllItems = async (itr) => {
  try {
    const server = itr.MODEL_NAME;

    const res = await stockServices.getAllItems(server);
    return res;
  } catch (error) {
    console.error(error.message);
    return error.message;
  }
};

const relatory = async (itr) => {
  try {
    const server = itr.MODEL_NAME;

    const res = await stockServices.relatory(server);
    return res;
  } catch (error) {
    console.error(error.message);
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
  getSpecificItem,
  getAllItems,
  deleteOne,
  relatory,
};

export default stockControllers;
