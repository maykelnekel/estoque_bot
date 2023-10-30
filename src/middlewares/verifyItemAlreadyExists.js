import StockItem from "../models/stockItem.js";

const verifyItemAlreadyExists = async (name) => {
  const item = await StockItem.findOne({ name });
  if (item) {
    if (item.isActive === false) {
      throw new Error(
        `O item **${name}** já está cadastrado, porém está desativado. Por gentileza reative-o e tente novamente.`
      );
    } else {
      throw new Error(
        `O item **${name}** já está cadastrado, escolha outro nome.`
      );
    }
  }
};

export default verifyItemAlreadyExists;
