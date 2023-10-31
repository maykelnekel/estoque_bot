import Bot from "../bot.js";
import stockControllers from "../controllers/stockControllers.js";
import StockItem from "../models/stockItem.js";
import utils from "../utils/index.js";
import views from "../views/index.js";

import "dotenv/config.js";

const interactions = async () => {
  Bot.on("channelCreate", async (channel) => {
    try {
      const BOT_NAME = process.env.BOT_NAME;
      const channelId = channel.id;
      process.env["MODEL_NAME"] = channelId;
      const map = channel.guild.roles.map((role) => role.name);
      if (map.includes(BOT_NAME)) {
        await StockItem.create({ server: channelId, data: [] });
        return channel.createMessage(views.newChannelMessage);
      }
    } catch (error) {
      console.error(error);
    }
  });

  Bot.on("interactionCreate", async (itr) => {
    const channelId = itr.channel.id;
    process.env["MODEL_NAME"] = channelId;
    itr["MODEL_NAME"] = channelId;

    const comand = itr.data.name;

    let res;
    switch (comand) {
      case "ajuda":
        return itr.createMessage(views.helpMessage);
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
        res = await stockControllers.deleteOne(itr);
        return itr.createMessage(res);
      case "consultar_item":
        res = await stockControllers.getSpecificItem(itr);
        return utils.sender(itr, res);
      case "consultar_estoque":
        res = await stockControllers.getAllItems(itr);
        return utils.sender(itr, res);
      case "relatorio":
        res = await stockControllers.relatory(itr);
        return utils.sender(itr, res);
      default:
        return itr.createMessage("Nenhuma ação encontrada para o comando.");
    }
  });
};

export default interactions;
