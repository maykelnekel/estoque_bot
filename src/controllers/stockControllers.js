import "dotenv/config";

import stockServices from "../services/stockServices.js";
import utils from "../utils/index.js";

const createItem = (msg) => {
  try {
    const content = msg.content;
    const user = msg.member.user.username;

    const splitedComand = utils.normalizeComand(content);
    const itemName = splitedComand[1];
    const itemQuantity = Number(splitedComand[2]);

    const res = stockServices.createItem(itemName, itemQuantity, user);
    return res;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

const stockControllers = {
  createItem,
};

export default stockControllers;
