import "dotenv/config";
const PREFIX = process.env.BOT_PREFIX;

const normalizeComand = (content) => {
  const command = content.split(PREFIX)[1];
  const splitedComand = command.split(" ");
  return splitedComand;
};

const utils = {
  normalizeComand,
};

export default utils;
