# DiscordRPCBuilder
 
By HippoBaguette  


# Info
Dependencies:  discord-rpc version 3.1.4  
Requires Node.js

# How to use



1. Make a [Discord application](https://discord.com/developers/applications), call it whatever you want your RPC title to be. Go to `Rich Presence > Art Asessts` and upload two images. Remember their names.

2. Open `rpcInfo.json` and fill in the fields. For example, this is the result from

```
{
    "largeImage": "cat",
    "largeImageText": "cat",
    "smallImage": "bear",
    "smallImageText": "bear",
    "lineOne": "Line One",
    "lineTwo": "Line Two"
}
```
Note that `largeImage` and `smallImage` must be the exact names of the images you uploaded

![Put the clientID here](/images/rpcone.png "RPC")
![Put the clientID here](/images/rpctwo.png "RPC")
![Put the clientID here](/images/rpcthree.png "RPC")




3. Head back to your Discord application and copy its **Client id**.

4. Paste that Client id inside of `index.js` right here  
![Put the clientID here](/images/clientid.png "Put the clientId here")

5. Run index.js and enjoy!

Any problems please make an issue :)
