# RPCSimplifed
 
By HippoBaguette  


# Info
Dependencies:  discord-rpc version 3.1.4  
Requires Node.js

A Discord rich presence client generator

To install `npm i rpcsimplified`

# Simple example



1. Make a [Discord application](https://discord.com/developers/applications), call it whatever you want your RPC title to be. Go to `Rich Presence > Art Asessts` and upload two images. Remember their names.

2. In index.js 
    ```js
    const rpc = require("rpcsimplified");

    rpc.login("your-client-id");
    rpc.build({
        largeImage: "large-image", 
        largeImageText: "large-image-text", 
        smallImag: "small-image", 
        smallImageText: "small-image-text", 
        lineOne: "line-one", 
        lineTwo: "line-two"
    });
    ```

    Here it is after the code is ran.

    ![Result](/images/rpcone.png "RPC")

    (Note it is assumed you have images upload)  
    (And rename `large-image` and `small-image` to whatever you called the images in the Discord application)
    

    

Any problems please make an issue :)
