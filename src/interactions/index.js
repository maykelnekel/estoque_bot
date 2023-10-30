import Bot from "../bot.js";
import stockControllers from "../controllers/stockControllers.js";

const interactions = async () =>
  Bot.on("interactionCreate", async (itr) => {
    const comand = itr.data.name;
    let res;
    if (comand === "ajuda") return;
    switch (comand) {
      case "ajuda":
        return itr.createMessage("Você chamou ajuda!");
      case "criar_item":
        res = await stockControllers.createItem(itr);
        return itr.createMessage(res);
      case "adicionar":
        res = await stockControllers.addQuantity(itr);
        return itr.createMessage(res);
      case "remover":
        res = await stockControllers.removeQuantity(itr);
        return itr.createMessage(res);
      case "trocar_nome":
        res = await stockControllers.changeName(itr);
        return itr.createMessage(res);
      case "deletar_item":
        res = await stockControllers.desactive(itr);
        return itr.createMessage(res);
      case "reativar_item":
        res = await stockControllers.reactive(itr);
        return itr.createMessage(res);
      case "consultar_item":
        res = await stockControllers.getSpecificItem(itr);
        return itr.createMessage(res);
      case "consultar_estoque":
        res = await stockControllers.getAllItems();
        return itr.createMessage(res);
      default:
        return itr.createMessage("Nenhuma ação encontrada para o comando.");
    }
  });

export default interactions;
