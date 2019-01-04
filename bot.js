var Discord = require(‘discord.io’);
var logger = require(‘winston’);
var auth = require(‘./auth.json’);
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
colorize: true});
logger.level = ‘debug’;
// Initialize Discord Bot
var bot = new Discord.Client({
token: auth.token,
autorun: true
});
bot.on(‘ready’, function (evt) {
logger.info(‘Connected’);
logger.info(‘Logged in as: ‘);
logger.info(bot.username + ‘ – (‘ + bot.id + ‘)’);
});
bot.on(‘message’, function (user, userID, channelID, message, evt) {
if (message.substring(0, 1) == ‘!rtb’) {
var args = message.substring(1).split(‘ ‘);
var cmd = args[0];
// mean responses
args = args.splice(1);
switch(cmd) {
case ‘intro’:
bot.sendMessage({
to: channelID,
message: "what do you want from me?"
});
case ‘tell me a joke’:
bot.sendMessage({
to: channelID,
message: "how do you keep an idiot in suspense?"
});    
case ‘fuck you’:
bot.sendMessage({
to: channelID,
message: "go fuck yourself!" + channelID
});
case ‘no fuck you’:
bot.sendMessage({
to: channelID,
message: "go fuck your mom!" + channelID
});
case ‘suck my dick’:
bot.sendMessage({
to: channelID,
message: "sorry, i don't use toothpicks" + channelID
});
break;
}
}
});
