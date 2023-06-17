const discord = require('discord.js');
const client = new discord.Client({
    intents: [
        discord.GatewayIntentBits.MessageContent,
        discord.GatewayIntentBits.Guilds,
        discord.GatewayIntentBits.GuildMembers,
        discord.GatewayIntentBits.GuildMessages,
        discord.GatewayIntentBits.GuildVoiceStates,
        discord.GatewayIntentBits.DirectMessages,
    ]
});
client.login();
client.on("ready", () => {
    console.log(`${client.user.username} พร้อมแล้วไอสวะ`);
});
client.on("messageCreate", (message) => {
    if (message.channel.id != "1103273271568367709") return;
    if (message.author.id == "1119693286597214259") return;
    if (message.content == "hello") {
        message.channel.send('มีควยไร');
    } else if (message.content == "ไอควาย") {
        message.channel.send('เป็นควยไรอะ');
    } else if (message.content == "ควย") {
        let num = Math.floor((Math.random() * 3) + 1)
        if (num == 1) { message.channel.send('แม่มึงอะ'); }
        else if (num == 2) { message.channel.send('มึงมันควยเล็ก'); }
        else {message.channel.send("โง่ๆๆๆๆ")}
    }
    else { message.channel.send("อย่าบ้า") }
})
