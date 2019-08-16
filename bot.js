const twit=require('twit');
const config=require('./config.js')
const randomQuotes = require('random-quotes');

var T=new twit(config);

tweet();
setInterval(tweet , 1000*60*60*24);
function tweet(){

    var quote=randomQuotes.default();


    T.post('statuses/update', { status: `${quote.body} \n -${quote.author}   #quotes #everydayquotes #quoteoftheday #qotd`}, function(err, data, response) {
        if(err){
            console.log("something went wrong");
        }
        else{
            console.log(`posted tweeted:    ${quote.body}  -${quote.author}`);
        }
      });
    
    
}