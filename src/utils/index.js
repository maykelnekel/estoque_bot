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

const normalizeDate = (date) => {
  const originalDate = new Date(date);

  const day = String(originalDate.getDate()).padStart(2, "0");
  const month = String(originalDate.getMonth() + 1).padStart(2, "0");
  const year = originalDate.getFullYear();
  const hour = String(originalDate.getHours()).padStart(2, "0");
  const minute = String(originalDate.getMinutes()).padStart(2, "0");
  const second = String(originalDate.getSeconds()).padStart(2, "0");
  const timeZone = originalDate.toString().match(/\(([^)]+)\)/)[1];

  const formattedDate = `${day}/${month}/${year} ${hour}:${minute}:${second} ${timeZone}`;
  return formattedDate;
};

const utils = {
  normalizeComand,
  jsonify,
  findOneByName,
  normalizeNumber,
  normalizeDate,
};

export default utils;
