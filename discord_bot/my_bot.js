const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Connected as " + client.user.tag);

  client.user.setActivity("YouTube", { type: "WATCHING" });

  // terminators channel id:
  client.guilds.cache.forEach((guild) => {
    console.log(guild.name);
    guild.channels.cache.forEach((channel) => {
      console.log(` - ${channel.name} ${channel.id}`);
    });
  });

  let termChannel = client.channels.cache.get("use channel id here");
  // to send message everytime it comes online
  //   const attachment = new Discord.cache.Attachment();
  //   termChannel.send(attachment);
  //   termChannel.send("Hello World!");
});

client.on("message", (recievedMessage) => {
  if (recievedMessage.author == client.user) {
    return;
  }
  // To react to every message other than its own
  //   recievedMessage.channel.send(
  //     "Message recieved, " +
  //       recievedMessage.author.toString() +
  //       ": " +
  //       recievedMessage.content
  //   );
  //   recievedMessage.react("👍");

  if (recievedMessage.content.startsWith("$")) {
    processCommand(recievedMessage);
  }
});

function processCommand(recievedMessage) {
  let fullCommand = recievedMessage.content.substr(1);
  let splitCommand = fullCommand.split(" ");
  let primaryCommand = splitCommand[0];
  let arguments = splitCommand.slice(1);

  if (primaryCommand == "help") {
    helpCommand(arguments, recievedMessage);
  } else if (primaryCommand == "multiply") {
    multiplyCommand(arguments, recievedMessage);
  } else {
    recievedMessage.channel.send("Unknown command. Try `$help` or `$multiply");
  }
}

function helpCommand(arguments, recievedMessage) {
  if (arguments.length == 0) {
    recievedMessage.channel.send(
      "I'm not sure what you need help with. Try `$help [topic]`"
    );
  } else {
    recievedMessage.channel.send(
      "It looks like you need help with " + arguments
    );
  }
}

function multiplyCommand(arguments, recievedMessage) {
  if (arguments.length < 2) {
    recievedMessage.channel.send("Not enough arguments. Try `$multiply 2 10`");
    return;
  }
  let product = 1;
  arguments.forEach((value) => {
    product = product * parseFloat(value);
  });
  recievedMessage.channel.send(
    "The product of " + arguments + " is " + product.toString()
  );
}

client.login("Use discord token here!!!!");
