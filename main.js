const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
  ],
});

client.once(Discord.Events.ClientReady, (client) => {
  console.log(`Bot logged in as ${client.user.username}`);
});

client.login(process.env.TOKEN);
