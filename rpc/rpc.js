module.exports={
    buildRPC(rpc, rpcInfo){
        rpc.on("ready", () => {
            rpc.setActivity({
                details: rpcInfo.lineOne,
                state: rpcInfo.lineTwo,
                startTimestamp: new Date(),
                largeImageKey: rpcInfo.largeImage,
                largeImageText: rpcInfo.largeImageText,
                smallImageKey: rpcInfo.smallImage,
                smallImageText: rpcInfo.smallImageText
            });
        
            console.log("ready");
        });
        
    }
}

