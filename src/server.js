import databaseConnect from "./Database/index.js";
import app from "./app.js";
import Bot from "./bot.js";
import {
  addCommand,
  ajuda,
  createCommand,
  deleteCommand,
  editName,
  relatoryCommand,
  removeCommand,
  selectAllItemsCommand,
  selectSpecificItemCommand,
} from "./commands/index.js";

(async () => {
  Bot.on("ready", async () => {
    // for (const iterator of [
    //   "1167516796513959982",
    //   "1168388811479326761",
    //   "1168400987480928296",
    //   "1168439037191798784",
    // ]) {
    //   await Bot.deleteCommand(iterator);
    // }
    // await Bot.createCommand(selectAllItemsCommand);
    // await Bot.createCommand(selectSpecificItemCommand);
    // await Bot.createCommand(editName);
    // await Bot.createCommand(removeCommand);
    // await Bot.createCommand(deleteCommand);
    // await Bot.createCommand(addCommand);
    // await Bot.createCommand(ajuda);
    // await Bot.createCommand(createCommand);
    // await Bot.createCommand(relatoryCommand);
    // const registeredCommands = await Bot.getCommands();
    // console.log(registeredCommands.map((item) => item.id));
  });

  Bot.on("error", (err) => console.error(err));
  await databaseConnect();
  console.log("Mongo is Ready!");
  await app();
  console.log("Application is Ready!");

  Bot.connect();
  console.log("Discord is Ready!");
})();
