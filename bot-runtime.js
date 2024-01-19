const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("messageCreate", (message) => {
  if (message.content.startsWith("20202020")) {
    message.channel.send("test");
  }
});

client.login("MTE2MzE2MDIxNzQ5MjY2NDQ1MQ.G38wY-.3GzZqYR9JiGxQ0366-yX2NN5l8a3KfwTKMujLk");
// Set the prefix
const prefix = "!";
client.on("messageCreate", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

  // The back ticks are Template Literals introduced in Javascript in ES6 or ES2015, as an replacement for String Concatenation Read them up here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  if (message.content.startsWith(`${prefix}test`)) {
    message.channel.send("If you see this, the bot is up and running.");
  } else

  if (message.content.startsWith(`${prefix}ticket`)) {
    const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

channel.send({ embeds: [exampleEmbed] });
  }
});
