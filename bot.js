const Discord = require("discord.js");

const client = new Discord.Client();
const config = require("./config.json");

var olvia1_p = "Sem informações.";
var olvia1_p_time = "Sem informações.";
var olvia1_s = "Sem informações.";
var olvia1_s_time = "Sem informações.";

var balenos1_p = "Sem informações.";
var balenos1_p_time = "Sem informações.";
var balenos1_s = "Sem informações.";
var balenos1_s_time = "Sem informações.";

var balenos2_p = "Sem informações.";
var balenos2_p_time = "Sem informações.";
var balenos2_s = "Sem informações.";
var balenos2_s_time = "Sem informações.";

var serendia1_p = "Sem informações.";
var serendia1_p_time = "Sem informações.";
var serendia1_s = "Sem informações.";
var serendia1_s_time = "Sem informações.";

var serendia2_p = "Sem informações.";
var serendia2_p_time = "Sem informações.";
var serendia2_s = "Sem informações.";
var serendia2_s_time = "Sem informações.";

var calpheon1_p = "Sem informações.";
var calpheon1_p_time = "Sem informações.";
var calpheon1_s = "Sem informações.";
var calpheon1_s_time = "Sem informações.";

var calpheon2_p = "Sem informações.";
var calpheon2_p_time = "Sem informações.";
var calpheon2_s = "Sem informações.";
var calpheon2_s_time = "Sem informações.";

var mediah1_p = "Sem informações.";
var mediah1_p_time = "Sem informações.";
var mediah1_s = "Sem informações.";
var mediah1_s_time = "Sem informações.";

var mediah2_p = "Sem informações.";
var mediah2_p_time = "Sem informações.";
var mediah2_s = "Sem informações.";
var mediah2_s_time = "Sem informações.";

var velia1_p = "Sem informações.";
var velia1_p_time = "Sem informações.";
var velia1_s = "Sem informações.";
var velia1_s_time = "Sem informações.";

var velia2_p = "Sem informações.";
var velia2_p_time = "Sem informações.";
var velia2_s = "Sem informações.";
var velia2_s_time = "Sem informações.";

var valencia1_p = "Sem informações.";
var valencia1_p_time = "Sem informações.";
var valencia1_s = "Sem informações.";
var valencia1_s_time = "Sem informações.";

var valencia2_p = "Sem informações.";
var valencia2_p_time = "Sem informações.";
var valencia2_s = "Sem informações.";
var valencia2_s_time = "Sem informações.";

var arsha_p = "Sem informações.";
var arsha_p_time = "Sem informações.";
var arsha_s = "Sem informações.";
var arsha_s_time = "Sem informações.";

var kamasylvia1_p = "Sem informações.";
var kamasylvia1_p_time = "Sem informações.";
var kamasylvia1_s = "Sem informações.";
var kamasylvia1_s_time = "Sem informações.";
var guilds;

client.on("ready", () => {
    console.log(`Bot VS1 foi iniciado`);
    client.user.setGame(`Em Hystria`);
    guilds = client.guilds;
    console.log(guilds);

    /*var af = 400000000;
    
        a = setInterval(function () {
            console.log(`teste`);
    
    
            try {
                client.users.get("someID").send("someMessage");
                client.users.get(olvia1_p).send("Welcome to the server!")
            }
            catch (e) {
    
                console.log(e);
            }
    
    
    
            af = af - 1;
    
            if (af == 0) {
                clearInterval(a);
            }
            console.log(af);
        }, 5000);*/
}
);

client.on("message", async message => {
    if (message.author.bot)
        return;

    if (message.channel.type == "dm")
        return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLocaleLowerCase();

    if (comando == "teste") {
        //guilds.member.fin //only green status
    }

    if (comando == "check") {
        message.channel.send(
            "```" + "\n" + "Velia 1: Principal - " + velia1_p + " " + velia1_p_time + " | Secundário - " + velia1_s + " " + velia1_s_time + "\n" + "```"+
            "```" + "\n" +"Velia 2: Principal - " + velia2_p + " " + velia2_p_time + " | Secundário - " + velia2_s + " " + velia2_s_time+ "\n" + "```"+
            "```" + "\n" +"Balenos 1: Principal - " + balenos1_p + " " + balenos1_p_time + " | Secundário - " + balenos1_s + " " + balenos1_s_time+ "\n" + "```"+
            "```" + "\n" +"Balenos 2: Principal - " + balenos2_p + " " + balenos2_p_time + " | Secundário - " + balenos2_s + " " + balenos2_s_time + "\n" + "```"+
            "```" + "\n" +"Serendia 1: Principal - " + serendia1_p + " " + serendia1_p_time + " | Secundário - " + serendia1_s + " " + serendia1_s_time + "\n" + "```"+
            "```" + "\n" +"Serendia 2: Principal - " + serendia2_p + " " + serendia2_p_time + " | Secundário - " + serendia2_s + " " + serendia2_s_time + "\n" + "```"+
            "```" + "\n" +"Calpheon 1: Principal - " + calpheon1_p + " " + calpheon1_p_time + " | Secundário - " + calpheon1_s + " " + calpheon1_s_time + "\n" + "```"+
            "```" + "\n" +"Calpheon 2: Principal - " + calpheon2_p + " " + calpheon2_p_time + " | Secundário - " + calpheon2_s + " " + calpheon2_s_time + "\n" + "```"+
            "```" + "\n" +"Mediah 1: Principal - " + mediah1_p + " " + mediah1_p_time + " | Secundário - " + mediah1_s + " " + mediah1_s_time + "\n" + "```"+
            "```" + "\n" + "Mediah 2: Principal - " + mediah2_p + " " + mediah2_p_time + " | Secundário - " + mediah2_s + " " + mediah2_s_time + "\n" + "```"+
            "```" + "\n" + "Valência 1: Principal - " + valencia1_p + " " + valencia1_p_time + " | Secundário - " + valencia1_s + " " + valencia1_s_time + "\n" + "```"+
            "```" + "\n" +"Valência 2: Principal - " + valencia2_p + " " + valencia2_p_time + " | Secundário - " + valencia2_s + " " + valencia2_s_time + "\n" + "```"+
            "```" + "\n" + "Kamasylvia 1: Principal - " + kamasylvia1_p + " " + kamasylvia1_p_time + " | Secundário - " + kamasylvia1_s + " " + kamasylvia1_s_time + "\n" + "```"+
            "```" + "\n" + "Arsha: Principal - " + arsha_p + " " + arsha_p_time + " | Secundário - " + arsha_s + " " + arsha_s_time + "\n" + "```"+
            "```" + "\n" + "Olvia 1: Principal - " + olvia1_p + " " + olvia1_p_time + " | Secundário - " + olvia1_s + " " + olvia1_s_time+ "\n" + "```"

        );

    }
    if (comando == "comandos") {
        message.channel.send("**Comandos**: " + "\n" + "\n" + "**!grind** Utilize esse comando para dizer que você está grindando em determinado canal no spot principal ou secundário." + "\n" + "Utilize-o seguido do nome do canal e a letra **P** para principal e **S** para secundário." + "\n" + "Por exemplo: " + "\n" + "**!grind mediah2 p** (Estou grindando no servidor mediah2 no spot principal)." + "\n" + "**!grind mediah2 s** (Estou grindando no servidor mediah2 no spot secundário)." + "\n" + "\n" + "**!check** Utilize esse comando para visualizar os spots em todos os canais." + "\n" + "\n" + "**!bye** Utilize esse comando sempre que for sair do seu spot." + "\n" + "\n" + "**!fulano** Utilize esse comando para informar quem está no spot. Lembre-se de informar o **P** para spot principal e **S** para spot secundário." + "\n" + "Por exemplo:" + "\n" + "**!fulano mediah2 p Random** (Você está informando que existe um random no servidor mediah 2 no spot principal)" + "\n" + "Obs: O nome da pessoa que está no spot deve ser uma palavra única." + "\n" + "Correto: !fulano mediah2 p RandomSemGuild" + "\n" + "Incorreto: !fulano mediah2 p Random sem guild");
    }

    if (comando == "grind") {

        let canal = args[0];

        let spot = args[1];
       // message.channel.send("```diff" + "\n" + "-" + args[0] + "Você não digitou o canal corretamente. Tente novamente, digite o nome do canal e o número, tudo junto. Ex: mediah2." + "\n" + "```");

       if(canal != "arsha" && canal != "velia1"&& canal != "velia2"
       && canal != "balenos1"&& canal != "balenos2"
       && canal != "serendia1"&& canal != "serendia2"
       && canal != "calpheon1"&& canal != "calpheon2"
       && canal != "mediah1"
       && canal != "mediah2"
       && canal != "valencia1"
       && canal != "valencia2"
       && canal != "kamasylvia1"
       && canal != "olvia1")
       {
            message.channel.send("```diff" + "\n" + "-" + "Você não digitou o canal corretamente. Tente novamente, digite o nome do canal e o número, tudo junto. Ex: mediah2. Digite !comando para mais informações." + "\n" + "```");
            return;
       }
       if(spot != "p" && spot != "s")
       {
        message.channel.send("```diff" + "\n" + "-" + "Você não digitou o spot corretamente. Tente novamente, digite P para principal ou S para secundário. Ex: !grind arsha p. Digite !comando para mais informações." + "\n" + "```");
        return;
       }
       



        if (canal == "olvia1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                olvia1_p = message.member.displayName;
                olvia1_p_time = hora + ":" + minuto;

                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em olvia 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                olvia1_s = message.member.displayName;
                olvia1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em olvia 1 no spot secundário."+ "\n" + "```");
            }
        }

        if (canal == "velia1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                velia1_p = message.member.displayName;
                velia1_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em velia 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                velia1_s = message.member.displayName;
                velia1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em velia 1 no spot secundário."+ "\n" + "```");
            }
        }

        if (canal == "velia2") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                velia2_p = message.member.displayName;
                velia2_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em velia 2 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                velia2_s = message.member.displayName;
                velia2_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em velia 2 no spot secundário."+ "\n" + "```");
            }
        }

        if (canal == "balenos1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                balenos1_p = message.member.displayName;
                balenos1_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em balenos 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                balenos1_s = message.member.displayName;
                balenos1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em balenos 1 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "balenos2") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                balenos2_p = message.member.displayName;
                balenos2_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em balenos 2 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                balenos2_s = message.member.displayName;
                balenos2_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em balenos 2 no spot secundário."+ "\n" + "```");
            }
        }

        if (canal == "serendia1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                serendia1_p = message.member.displayName;
                serendia1_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em serendia 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                serendia1_s = message.member.displayName;
                serendia1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em serendia 1 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "serendia2") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                serendia2_p = message.member.displayName;
                serendia2_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em serendia 2 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                serendia2_s = message.member.displayName;
                serendia2_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em serendia 2 no spot secundário."+ "\n" + "```");
            }
        }

        if (canal == "calpheon1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                calpheon1_p = message.member.displayName;
                calpheon1_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em calpheon 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                calpheon1_s = message.member.displayName;
                calpheon1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em calpheon 1 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "calpheon2") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                calpheon2_p = message.member.displayName;
                calpheon2_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em calpheon 2 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                calpheon2_s = message.member.displayName;
                calpheon2_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em calpheon 2 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "mediah1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                mediah1_p = message.member.displayName;
                mediah1_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em mediah 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                mediah1_s = message.member.displayName;
                mediah1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em mediah 1 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "mediah2") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                mediah2_p = message.member.displayName;
                mediah2_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em mediah 2 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                mediah2_s = message.member.displayName;
                mediah2_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em mediah 2 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "valencia1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                valencia1_p = message.member.displayName;
                valencia1_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em valência 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                valencia1_s = message.member.displayName;
                valencia1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em valência 1 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "valencia2") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                valencia2_p = message.member.displayName;
                valencia2_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em valência 2 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                valencia2_s = message.member.displayName;
                valencia2_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em valência 2 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "kamasylvia1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                kamasylvia1_p = message.member.displayName;
                kamasylvia1_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em kamasylvia 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                kamasylvia1_s = message.member.displayName;
                kamasylvia1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em kamasylvia 1 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "arsha") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                arsha_p = message.member.displayName;
                arsha_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em arsha no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                arsha_s = message.member.displayName;
                arsha_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "!" + message.member.displayName + " está grindando em arsha no spot secundário."+ "\n" + "```");
            }
        }


    }

    if (comando == "keep") {
        var today = new Date();
        var hora = today.getHours();
        var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();

        if (olvia1_p == message.member.displayName) {
            olvia1_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de olvia 1.");
        }
        if (olvia1_s == message.member.displayName) {
            olvia1_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de olvia 1.");
        }
        if (velia1_p == message.member.displayName) {
            velia1_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de velia 1.");
        }
        if (velia1_s == message.member.displayName) {
            velia1_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de velia 1.");
        }
        if (velia2_p == message.member.displayName) {
            velia2_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de velia 2.");
        }
        if (velia2_s == message.member.displayName) {
            velia2_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de velia 2.");
        }

        if (balenos1_p == message.member.displayName) {
            balenos1_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de balenos 1.");
        }
        if (balenos1_s == message.member.displayName) {
            balenos1_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de balenos 1.");
        }

        if (balenos2_p == message.member.displayName) {
            balenos2_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de balenos 2.");
        }
        if (balenos2_s == message.member.displayName) {
            balenos2_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de balenos 2.");
        }

        if (serendia1_p == message.member.displayName) {
            serendia1_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de serendia 1.");
        }
        if (serendia1_s == message.member.displayName) {
            serendia1_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de serendia 1.");
        }

        if (serendia2_p == message.member.displayName) {
            serendia2_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de serendia 2.");
        }
        if (serendia2_s == message.member.displayName) {
            serendia2_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de serendia 2.");
        }

        if (calpheon1_p == message.member.displayName) {
            calpheon1_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de calpheon 1.");
        }
        if (calpheon1_s == message.member.displayName) {
            calpheon1_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de calpheon 1.");
        }

        if (calpheon2_p == message.member.displayName) {
            calpheon2_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de calpheon 2.");
        }
        if (calpheon2_s == message.member.displayName) {
            calpheon2_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de calpheon 2.");
        }

        if (mediah1_p == message.member.displayName) {
            mediah1_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de mediah 1.");
        }
        if (mediah1_s == message.member.displayName) {
            mediah1_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de mediah 1.");
        }
        if (mediah2_p == message.member.displayName) {
            mediah2_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de mediah 2.");
        }
        if (mediah2_s == message.member.displayName) {
            mediah2_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de mediah 2.");
        }

        if (valencia1_p == message.member.displayName) {
            valencia1_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de valência 1.");
        }
        if (valencia1_s == message.member.displayName) {
            valencia1_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de valência 1.");
        }
        if (valencia2_p == message.member.displayName) {
            valencia2_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de valência 2.");
        }
        if (valencia2_s == message.member.displayName) {
            valencia2_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de valência 2.");
        }
        if (kamasylvia1_p == message.member.displayName) {
            kamasylvia1_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de kamasylvia 1.");
        }
        if (kamasylvia1_s == message.member.displayName) {
            kamasylvia1_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de kamasylvia 1.");
        }

        if (arsha_p == message.member.displayName) {
            arsha_p_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot principal de arsha.");
        }
        if (arsha_s == message.member.displayName) {
            arsha_s_time = hora + ":" + minuto;
            message.channel.send(message.member.displayName + " Vai ficar mais tempo no spot secundário de arsha.");
        }
    }

    /////// FULANO
    if (comando == "fulano") {
        let canal = args[0];
        let spot = args[1];
        let fulano = args[2];

        if (canal == "olvia1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                olvia1_p = fulano;
                olvia1_p_time = hora + ":" + minuto;

                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em olvia 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                olvia1_s = message.member.displayName;
                olvia1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em olvia 1 no spot secundário."+ "\n" + "```");
            }
        }

        if (canal == "velia1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                velia1_p = fulano;
                velia1_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em velia 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                velia1_s = fulano;
                velia1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em velia 1 no spot secundário."+ "\n" + "```");
            }
        }

        if (canal == "velia2") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                velia2_p = fulano;
                velia2_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em velia 2 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                velia2_s = fulano;
                velia2_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em velia 2 no spot secundário."+ "\n" + "```");
            }
        }

        if (canal == "balenos1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                balenos1_p = fulano;
                balenos1_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em balenos 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                balenos1_s = fulano;
                balenos1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em balenos 1 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "balenos2") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                balenos2_p = fulano;
                balenos2_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em balenos 2 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                balenos2_s = fulano;
                balenos2_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em balenos 2 no spot secundário."+ "\n" + "```");
            }
        }

        if (canal == "serendia1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                serendia1_p = fulano;
                serendia1_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em serendia 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                serendia1_s = fulano;
                serendia1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em serendia 1 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "serendia2") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                serendia2_p = fulano;
                serendia2_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em serendia 2 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                serendia2_s = fulano;
                serendia2_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em serendia 2 no spot secundário."+ "\n" + "```");
            }
        }

        if (canal == "calpheon1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                calpheon1_p = fulano;
                calpheon1_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em calpheon 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                calpheon1_s = fulano;
                calpheon1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em calpheon 1 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "calpheon2") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                calpheon2_p = fulano;
                calpheon2_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em calpheon 2 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                calpheon2_s = fulano;
                calpheon2_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em calpheon 2 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "mediah1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                mediah1_p = fulano;
                mediah1_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em mediah 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                mediah1_s = fulano;
                mediah1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em mediah 1 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "mediah2") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                mediah2_p = fulano;
                mediah2_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em mediah 2 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                mediah2_s = fulano;
                mediah2_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em mediah 2 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "valencia1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                valencia1_p = fulano;
                valencia1_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em valência 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                valencia1_s = fulano;
                valencia1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em valência 1 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "valencia2") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                valencia2_p = fulano;
                valencia2_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em valência 2 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                valencia2_s = fulano;
                valencia2_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em valência 2 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "kamasylvia1") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                kamasylvia1_p = fulano;
                kamasylvia1_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em kamasylvia 1 no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                kamasylvia1_s = fulano;
                kamasylvia1_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em kamasylvia 1 no spot secundário."+ "\n" + "```");
            }
        }
        if (canal == "arsha") {
            if (spot == "p") {

                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                arsha_p = fulano;
                arsha_p_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em arsha no spot principal."+ "\n" + "```");
            }
            else if (spot == "s") {
                var today = new Date();
                var hora = today.getHours();
                var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
                arsha_s = fulano;
                arsha_s_time = hora + ":" + minuto;
                message.channel.send("```diff" + "\n" + "-" + fulano + " está grindando em arsha no spot secundário."+ "\n" + "```");
            }
        }


    }

    ////////////


    if (comando == "bye") {
        var today = new Date();
        var hora = today.getHours();
        var minuto = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();

        if (olvia1_p == message.member.displayName) {
            olvia1_p = "Livre ";
            olvia1_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de olvia 1."+"]" +"\n" + "```");
        }
        if (olvia1_s == message.member.displayName) {
            olvia1_s = "Livre ";
            olvia1_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de olvia 1."+"]" +"\n" + "```");
        }
        if (velia1_p == message.member.displayName) {
            velia1_p = "Livre ";
            velia1_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de velia 1."+"]" +"\n" + "```");
        }
        if (velia1_s == message.member.displayName) {
            velia1_s = "Livre ";
            velia1_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de velia 1."+"]" +"\n" + "```");
        }
        if (velia2_p == message.member.displayName) {
            velia2_p = "Livre ";
            velia2_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de velia 2."+"]" +"\n" + "```");
        }
        if (velia2_s == message.member.displayName) {
            velia2_s = "Livre ";
            velia2_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de velia 2."+"]" +"\n" + "```");
        }

        if (balenos1_p == message.member.displayName) {
            balenos1_p = "Livre ";
            balenos1_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de balenos 1."+"]" +"\n" + "```");
        }
        if (balenos1_s == message.member.displayName) {
            balenos1_s = "Livre ";
            balenos1_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de balenos 1."+"]" +"\n" + "```");
        }

        if (balenos2_p == message.member.displayName) {
            balenos2_p = "Livre ";
            balenos2_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de balenos 2."+"]" +"\n" + "```");
        }
        if (balenos2_s == message.member.displayName) {
            balenos2_s = "Livre ";
            balenos2_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de balenos 2."+"]" +"\n" + "```");
        }

        if (serendia1_p == message.member.displayName) {
            serendia1_p = "Livre ";
            serendia1_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de serendia 1."+"]" +"\n" + "```");
        }
        if (serendia1_s == message.member.displayName) {
            serendia1_s = "Livre ";
            serendia1_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de serendia 1."+"]" +"\n" + "```");
        }

        if (serendia2_p == message.member.displayName) {
            serendia2_p = "Livre ";
            serendia2_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de serendia 2."+"]" +"\n" + "```");
        }
        if (serendia2_s == message.member.displayName) {
            serendia2_s = "Livre ";
            serendia2_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de serendia 2."+"]" +"\n" + "```");
        }

        if (calpheon1_p == message.member.displayName) {
            calpheon1_p = "Livre ";
            calpheon1_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de calpheon 1."+"]" +"\n" + "```");
        }
        if (calpheon1_s == message.member.displayName) {
            calpheon1_s = "Livre ";
            calpheon1_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de calpheon 1."+"]" +"\n" + "```");
        }

        if (calpheon2_p == message.member.displayName) {
            calpheon2_p = "Livre ";
            calpheon2_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de calpheon 2."+"]" +"\n" + "```");
        }
        if (calpheon2_s == message.member.displayName) {
            calpheon2_s = "Livre ";
            calpheon2_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de calpheon 2."+"]" +"\n" + "```");
        }

        if (mediah1_p == message.member.displayName) {
            mediah1_p = "Livre ";
            mediah1_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de mediah 1."+"]" +"\n" + "```");
        }
        if (mediah1_s == message.member.displayName) {
            mediah1_s = "Livre ";
            mediah1_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de mediah 1."+"]" +"\n" + "```");
        }
        if (mediah2_p == message.member.displayName) {
            mediah2_p = "Livre ";
            mediah2_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de mediah 2."+"]" +"\n" + "```");
        }
        if (mediah2_s == message.member.displayName) {
            mediah2_s = "Livre ";
            mediah2_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de mediah 2."+"]" +"\n" + "```");
        }

        if (valencia1_p == message.member.displayName) {
            valencia1_p = "Livre ";
            valencia1_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de valência 1."+"]" +"\n" + "```");
        }
        if (valencia1_s == message.member.displayName) {
            valencia1_s = "Livre ";
            valencia1_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de valência 1."+"]" +"\n" + "```");
        }
        if (valencia2_p == message.member.displayName) {
            valencia2_p = "Livre ";
            valencia2_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de valência 2."+"]" +"\n" + "```");
        }
        if (valencia2_s == message.member.displayName) {
            valencia2_s = "Livre ";
            valencia2_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de valência 2."+"]" +"\n" + "```");
        }
        if (kamasylvia1_p == message.member.displayName) {
            kamasylvia1_p = "Livre ";
            kamasylvia1_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de kamasylvia 1."+"]" +"\n" + "```");
        }
        if (kamasylvia1_s == message.member.displayName) {
            kamasylvia1_s = "Livre ";
            kamasylvia1_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de kamasylvia 1."+"]" +"\n" + "```");
        }

        if (arsha_p == message.member.displayName) {
            arsha_p = "Livre ";
            arsha_p_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot principal de arsha."+"]" +"\n" + "```");
        }
        if (arsha_s == message.member.displayName) {
            arsha_s = "Livre ";
            arsha_s_time = hora + ":" + minuto;
            message.channel.send("```ini" + "\n" + "[" + message.member.displayName + " Saiu do spot secundário de arsha."+"]" +"\n" + "```");
           
        }



    }

});

client.login(process.env.BOT_TOKEN);
