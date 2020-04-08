const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }
})

client.logon("Njk3NTAyOTE2Mjk0MDgyNjAy.Xo4PEA.hnbNSDEYBfcooK3I_Phev75c_J0")

