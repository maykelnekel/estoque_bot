import StockItem from "../models/stockItem";
import utils from "../utils/index.js";

const verifyIfCollectionIsCreatedMiddleware = async (server) => {
  const res = await StockItem.find({ server });
};
