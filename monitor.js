const EventSource = require('eventsource');
const dotenv = require('dotenv');
dotenv.config();

const IP = process.env.IP;
const  phonemessage  = require('./phonemessage') 
console.log('monitor starting')

const es = new EventSource(`http://${IP}:3030/vitals`);

es.addEventListener('message', function (message) {
 // console.log('message:', JSON.parse(message.data).items);
  let response = JSON.parse(message.data).items;

 if(!response.node_running){
     	phonemessage.send('------------ALERT-------------\n\n0L validator node not running')
	}

 if(!response.miner_running){
        phonemessage.send('------------ALERT-------------\n\n0L validator tower not running')
        }


 if(!response.is_synced){
        phonemessage.send('------------ALERT-------------\n\n0L validator node out of sync')
        }







})
