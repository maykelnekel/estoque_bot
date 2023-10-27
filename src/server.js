import app from "./app.js";
import Bot from "./bot.js";
import {
  createCommand,
  addCommand,
  editCommand,
  removeCommand,
  deleteCommand,
  reactiveItemCommand,
  ajuda,
} from "./commands/index.js";

(async () => {
  Bot.on("ready", async () => {
    console.log("ready!");
    // await Bot.deleteCommand("1167511819632513104");
    // await Bot.deleteCommand("1167511884124139695");
    // await Bot.deleteCommand("1167511885994791022");
    // await Bot.deleteCommand("1167511887655739422");
    // await Bot.createCommand(createCommand);
    // await Bot.createCommand(addCommand);
    // await Bot.createCommand(editCommand);
    // await Bot.createCommand(removeCommand);
    // await Bot.createCommand(deleteCommand);
    // await Bot.createCommand(reactiveItemCommand);
    // await Bot.createCommand(ajuda);

    // const registeredCommands = await Bot.getCommands();
    // console.log(registeredCommands);
  });
  Bot.on("error", (err) => console.log(err));
  Bot.connect();

  app();
})();
