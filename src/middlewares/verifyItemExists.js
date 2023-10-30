import StockItem from "../models/stockItem.js";

const verifyItemExists = async (name, reactive = false) => {
  const item = await StockItem.findOne({ name });
  if (!item) {
    throw new Error(`O item **${name}** não foi encontrado no estoque.`);
  }
  if (item && item.isActive === false && reactive === false) {
    throw new Error(
      `O item **${name}** foi encontrado, porém está desativado. Por gentileza reative-o e tente novamente.`
    );
  }
};

export default verifyItemExists;
