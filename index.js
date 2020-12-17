const Discord = require("discord-rpc");
const rpc = new Discord.Client({
    transport: "ipc"
});
const { buildRPC } = require("./rpc/rpc.js");




module.exports = {
    name: "RPCExport",
    login(id){
        rpc.login({
            clientId: id
        });
    },
    build(largeImage, largeImageText, smallImage, smallImageText, lineOne, lineTwo){
        buildRPC(rpc, largeImage, largeImageText, smallImage, smallImageText, lineOne, lineTwo);
    }
}