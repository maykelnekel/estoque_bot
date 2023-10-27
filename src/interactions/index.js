import Bot from "../bot.js";

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

const interactions = async () =>
  Bot.on("interactionCreate", (itr) => {
    console.log(itr.data);
    console.log(itr.member.user);
    const comand = itr.data.name;
    const channelId = itr.channel.id;

    switch (comand) {
      case "ajuda":
        console.log(comand);
        Bot.createMessage(channelId, "Você chamou ajuda!");
        break;
      default:
        break;
    }
  });

export default interactions;
