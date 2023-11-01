import databaseConnect from "./Database/index.js";
import app from "./app.js";
import Bot from "./bot.js";
import {
  addCommand,
  help,
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
    //   "1169294160205983796",
    // ]) {
    //   await Bot.deleteCommand(iterator);
    // }
    // await Bot.createCommand(selectAllItemsCommand);
    // await Bot.createCommand(selectSpecificItemCommand);
    // await Bot.createCommand(editName);
    // await Bot.createCommand(removeCommand);
    // await Bot.createCommand(deleteCommand);
    // await Bot.createCommand(addCommand);
    // await Bot.createCommand(help);
    // await Bot.createCommand(createCommand);
    // await Bot.createCommand(relatoryCommand);
    // const registeredCommands = await Bot.getCommands();
    // console.log(registeredCommands);
    // console.log(
    //   registeredCommands.filter((item) => item.name === "consultar_item")[0]
    //     .options
    // );
  });

  Bot.on("error", (err) => console.error(err));
  await databaseConnect();
  console.log("Mongo is Ready!");
  await app();
  console.log("Application is Ready!");

  Bot.connect();
  console.log("Discord is Ready!");
})();
