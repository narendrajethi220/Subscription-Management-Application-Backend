import arcjet,{shield, detectBot, tokenBucket} from "@arcjet/node";
import {ARCJET_KEY} from './env.js';

//This configures Arcjet rules to protect your app from attacks, apply a rate limit, and prevent bots from accessing your app.
const aj=arcjet({
    key:ARCJET_KEY,
    characteristics:["ip.src"], //track request by ip
    rules:[
        shield({mode:"LIVE"}),
        detectBot({
            mode:"LIVE",
            allow:[
                "CATEGORY:SEARCH_ENGINE",
                "CURL",
                "POSTMAN",
                ],
         }),
        //creating a token bucket rate limit. Other algorithms are supported
        tokenBucket({ //algorithm based on bucket filled with a specific number of token
            mode:"LIVE", 
            refillRate:5, //refilling 5 token per interval
            interval:10, //refill every 10 second
            capacity:10, //bucket capacity 10 tokens
        })
        ] 
     });

export default aj;