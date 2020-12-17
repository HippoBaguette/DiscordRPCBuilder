module.exports={
    buildRPC(rpc, largeImage, largeImageText, smallImage, smallImageText, lineOne, lineTwo){
        rpc.on("ready", () => {
            rpc.setActivity({
                details: lineOne,
                state: lineTwo,
                startTimestamp: new Date(),
                largeImageKey: largeImage,
                largeImageText: largeImageText,
                smallImageKey: smallImage,
                smallImageText: smallImageText
            });
        
            console.log("ready");
        });
        
    }
}

