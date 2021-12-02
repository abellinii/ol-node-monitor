const EventSource = require('eventsource');
const dotenv = require('dotenv');
dotenv.config();

const IP = process.env.IP;
const  phonemessage  = require('./phonemessage'); 


var error = false;
var timer;


console.log('monitor starting')

const es = new EventSource(`http://${IP}:3030/vitals`);

es.addEventListener('message', function (message) {
 // console.log('message:', JSON.parse(message.data).items);
  let response = JSON.parse(message.data).items;



//clear timeout to send message to notify of server down
clearTimeout(this.timer);
    

 if(!response.node_running && !this.error){
        console.log('in')
     	phonemessage.send('------------ALERT-------------\n\n0L validator node not running');
            console.log('message sent')
       this.error = true;
	}

 if(!response.miner_running && !this.error){
        phonemessage.send('------------ALERT-------------\n\n0L validator tower not running');
        this.error = true;
        }


 if(!response.is_synced && !this.error){
        phonemessage.send('------------ALERT-------------\n\n0L validator node out of sync');
        this.error = true;
        }


//reset once node, tower and webserver are operational        
if(response.is_synced && response.miner_running && response.node_running){
       this.error = false;
}

//set timer in case the server is offline
this.timer = setTimeout(function (){
       phonemessage.send('------------ALERT-------------\n\n0L validator monitoring has not recieved a response for 5 minutes');
}, 5 * 60 * 1000);




})
