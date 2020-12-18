# DiscordRPCBuilder
 
By HippoBaguette  


# Info
Dependencies:  discord-rpc version 3.1.4  
Requires Node.js

# Simple example



1. Make a [Discord application](https://discord.com/developers/applications), call it whatever you want your RPC title to be. Go to `Rich Presence > Art Asessts` and upload two images. Remember their names.

2. In index.js 
    ```js
    const rpc = require("rpcsimplified");

    rpc.login("your-client-id");
    rpc.build("large-image", "large-image-text", "small-image", "small-image-text", "line-one", "line-two");
    ```

    Here it is after the code is ran.

    (Note it is assumed you have images upload)  
    (And rename `large-image` and `small-image` to whatever you called the images in the Discord application)
    
    ![Put the clientID here](/images/rpcone.png "RPC")
    

Any problems please make an issue :)
