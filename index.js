const Discord = require("discord-rpc");
const rpcInfo = require('./rpcInfo.json')
const rpc = new Discord.Client({
    transport: "ipc"
});
const { buildRPC } = require("./rpc/rpc.js");

buildRPC(rpc, rpcInfo);

rpc.login({
    clientId: "your-id"
});