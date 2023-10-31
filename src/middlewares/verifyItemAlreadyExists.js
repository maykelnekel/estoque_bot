import utils from "../utils/index.js";

const verifyItemAlreadyExists = async (server, name) => {
  const item = await utils.findOneByServerAndItemName(server, name);
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
