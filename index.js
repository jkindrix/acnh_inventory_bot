const Discord = require("discord.js")
const client = new Discord.Client()
const config = require('./config.json')

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", message => {
  if (message.content === "ping") {
    message.reply("Pong!");
  }
  if (message.content.startsWith("!kick")) {
    const member = message.mentions.members.first();
    if (!member) {
      return message.reply(
        `Who are you trying to kick? You must mention a user.`
      );
    }
    if (!member.kickable) {
      return message.reply(`I can't kick this user. Sorry!`);
    }
    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was kicked.`))
      .catch((error) => message.reply(`Sorry, an error occured.`));
  }
})

client.on("guildMemberAdd", member => {
  member.send(
    `Welcome on the server!`
  )
})

client.login(config.token)

