import databaseConnect from "./Database/index.js";
import app from "./app.js";
import Bot from "./bot.js";
import {
  createCommand,
  addCommand,
  editName,
  removeCommand,
  deleteCommand,
  reactiveItemCommand,
  ajuda,
  selectSpecificItemCommand,
  selectAllItemsCommand,
} from "./commands/index.js";

(async () => {
  Bot.on("ready", async () => {
    // await Bot.deleteCommand("1168438294393143307");
    // await Bot.deleteCommand("1167511884124139695");
    // await Bot.deleteCommand("1167511885994791022");
    // await Bot.deleteCommand("1167511887655739422");
    // await Bot.createCommand(selectAllItemsCommand);
    // await Bot.createCommand(selectSpecificItemCommand);
    // await Bot.createCommand(editName);
    // await Bot.createCommand(removeCommand);
    // await Bot.createCommand(deleteCommand);
    // await Bot.createCommand(reactiveItemCommand);
    // await Bot.createCommand(ajuda);
    // const registeredCommands = await Bot.getCommands();
    // console.log(registeredCommands);
  });
  Bot.on("error", (err) => console.log(err));
  Bot.connect();
  console.log("Discord is Ready!");
  await databaseConnect();
  console.log("Mongo is Ready!");
  await app();
  console.log("Application is Ready!");
})();
