import utils from "../utils/index.js";

const verifyItemExists = async (server, name, reactive = false) => {
  const item = await utils.findOneByServerAndItemName(server, name);
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
