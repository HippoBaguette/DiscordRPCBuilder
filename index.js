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
    build(args){
        buildRPC(rpc, args.largeImage, args.largeImageText, args.smallImage, args.smallImageText, args.lineOne, args.lineTwo);
    }
}