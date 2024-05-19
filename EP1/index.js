const { Events, Client, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once(Events.ClientReady, (client) => {
  console.log(`Bot logged in as ${client.user.username}`);
});

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) return;

  if (message.content === "hello") {
    message.reply(`Hi ${message.author}!`);
  }
});

client.login(token);
