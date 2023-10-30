import "dotenv/config";
import StockItem from "../models/stockItem.js";
const PREFIX = process.env.BOT_PREFIX;

const normalizeComand = (content) => {
  const command = content.split(PREFIX)[1];
  const splitedComand = command.split(" ");
  return splitedComand;
};

const jsonify = (obj) => JSON.stringify(obj, null, 2);

const findOneByName = async (name) => {
  return await StockItem.findOne({ name });
};

const normalizeNumber = (number) => number.replace(/,/g, ".");

const utils = {
  normalizeComand,
  jsonify,
  findOneByName,
  normalizeNumber,
};

export default utils;
