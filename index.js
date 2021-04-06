const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ','
client.on('ready', () => {client.user.setPresence({ activity: { name: 'Sur https://discord.link/hoatika', type: 'WATCHING' }, status: 'dnd' })
  console.log(`Logged in as ${client.user.tag}!`);
});



const EventEmitter = require("events");
const { fstat } = require('fs');
const { info, Console } = require('console');
const { Server } = require('http');
const { executionAsyncResource } = require('async_hooks');
const { constants } = require('buffer');
class myEmitter extends EventEmitter{}

var emitter = new myEmitter();
var emitter2 = new myEmitter();

emitter.setMaxListeners(1);
EventEmitter.defaultMaxListeners = 30;

client.on('message', msg => {
  if (msg.content === prefix + 'discord') {
    msg.reply('***https://discord.link/hoatika***');
  }
});


client.on('message', msg => {
  if (msg.content === prefix + 'pseudo') {
    msg.reply('***est ton pseudo***');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'staff') {
    msg.reply('__***Comme staff present il y a : fondateur:   @Gamma |🥀 | 𝑯𝒐𝒂𝒕𝒊𝒌𝒂#8003 , * | 𝕯𝖊𝖆𝖙𝖍𝕽𝖔𝖜 |* Moderateur : [H]𝙘𝙡𝙤𝙘𝙠𝙤 ***__');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'rc') {
    msg.reply('***Nous recrutons des Staff/Suport actif et des animateur . Pour cela ouvret un ticket , Merci !***');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'humain') {
    msg.reply('***il y a environ 7.059.181.177 sur terre***');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'shop') {
    msg.reply('__***Bonjour , toi qui a de l argent a jeter par la fenetre , vien acheter un grade premium avec plein d aventage sur #【💰】・𝘽𝙤𝙪𝙩𝙞𝙦𝙪𝙚 merci! ***___');
  }
});

client.on("message", message => {
  if(message.content.startsWith(prefix + "bot")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let embed1 = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Nouveau Bot")
    .setAuthor("***L'Equipe de Hoatika***")
    .setDescription("***Voici le PatchNot du bot de Hoatika @everyone***")
    .setThumbnail("https://i.imgur.com/l3WiXOE.gif")
    .addField("***Les Commandes***", "***Les commande pour l'instant ne sont pas encore très dévlopper , nous reviendrons vers vous lorsque ce dernier sera plus riche en commande***", false)
    .addField("***Pour le staff***", "***Des commandes tel que : ,ban ou ,kick seront ajoutées***", false)
    .addField("Merci d'avoir pris le temps de regarder ce message bonne journée a tous", "__***L'equipe de Hoatika***__")

    message.channel.send(embed1)
  }
});


client.on("message", message => {
  if(message.content.startsWith(prefix + "serveuron")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let embed1 = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("ServeurOn")
    .setAuthor("Moderateur")
    .setDescription("__Je vous Informe que Vespucci RP est actuellement Ouvert__")
    .addField("***--------------------------------------------------------------***", "***connect 178.33.147.23:32011***", false)
    .addField("***--------------------| || @everyone ||  |--------------------***", "***L'equipe de Vespucci City***")

    message.channel.send(embed1)
  }
});







client.on("message", message => {
  if(message.content.startsWith(prefix + "serveuroff")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let embed1 = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("ServeurOff")
    .setAuthor("Moderateur")
    .setDescription("__Je vous Informe que Vespucci RP est actuellement fermé__")

    message.channel.send(embed1)
  }
});


client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(message.content.startsWith(prefix + "ban")){
      if(message.member.hasPermission("ADMINISTRATOR")){ 
        
            let mentions = message.mentions.members.first();

            if(mentions == undefined){
                message.reply("Membre non ou mal mentionné.");
            }
            else {
                if(mentions.bannable){
                    mentions.ban();
                    message.channel.send(mentions.displayName + " a été banni de Hoatika avec succès");

                }
                else {
                    message.reply("impossible de bannir ce membre de Hoatika.");
                }
                
            }
      }  
        
      }   
        else if(message.content.startsWith(prefix + "helpeur")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Member non ou mal mentionné.");
            }
            else {
                mention.roles.add("817674504816951296");
                message.reply(mention.displayName + " a été promu en temps que helpeur sur Hoatika.");
          
          
              
            }
           
        }

    
  
});










client.on("guildMemberAdd", member => {
    console.log("Un nouveau memebre est arrivé");
    member.guild.channels.cache.find(channel => channel.id === "8817674505051963404").send(member.displayName + "vien d'arrivé , passe un bon moment sur Hoatika!");
});  

client.on("guildMemberRemove", member => {
    console.log("Un membre nous a quitté");
    member.guild.channels.cache.find(channel => channel.id === "818124744128987167").send("@" + member.displayName + " A quitté Hoatika :sob:");
});














client.on("message", message => {
    if(message.member.permissions.has("MANAGE_MESSAGES")){
        if(message.content.startsWith(prefix + "clear")){
            let args = message.content.split(" ");

            if(args[1] == undefined){
                message.reply("Nombre de message non ou mal défini.");
            }
            else {
                let number = parseInt(args[1]);
                
                if(isNaN(number)){
                   message.reply("Nombre de message non ou mal défini.");
                }
                else {
                    message.channel.bulkDelete(number).then(messages => {
                        console.log("Supression de " + messages.array.length + "messages réussi !");
                    }).catch(err => {
                       console.log("Erreur de clear : " + err);
                    });
             }
            }
    
        }
     
    }

    
  
        
});
            
              

            
client.on("message", message => {
  if(message.content.startsWith(prefix + "Annonce")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let embed1 = new Discord.MessageEmbed()
    .setColor("#0099ff")
    .setTitle("Recrutement Staff")
    .setAuthor("Gerant staff")
    .setDescription("__Je vous informe que Vespucci City recherche actuellement une personne pour passer staff__")

    message.channel.send(embed1)
  }
});
  
    
  
 
          
                











client.login('ODA3MzExOTg2MzcwNDEyNTQ1.YB2J4A.5OnetXjEOZ7SDp9OMiCYXpk1hRs');
