import "dotenv/config";
import Eris from "eris";
import { createCommand } from "./commands/index.js";
import stockControllers from "./controllers/stockControllers.js";
import utils from "./utils/index.js";

const Bot = Eris(process.env.BOT_TOKEN);

Bot.on("ready", async () => {
  console.log("ready!");
  await Bot.createCommand(createCommand);
});
Bot.on("error", (err) => console.log(err));
Bot.connect();

Bot.on("messageCreate", (msg) => {
  const PREFIX = process.env.BOT_PREFIX;
  const channelId = msg.channel.id;
  const content = msg.content;
  const comand = utils.normalizeComand(content)[0];

  if (msg.author.bot) {
    return;
  }

  if (!content.startsWith(PREFIX)) {
    return;
  }
  switch (comand) {
    case "criar_item":
      const res = stockControllers.createItem(msg);
      Bot.createMessage(channelId, res);

    default:
      break;
  }
});

export default Bot;
