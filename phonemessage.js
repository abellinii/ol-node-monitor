
const dotenv = require('dotenv');
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);



module.exports.send =  function(msg){

		client.messages
  			.create({
    				body: msg,
    				to: process.env.TWILIO_NUMBER_TO_SEND, // Text this number
   				from: process.env.TWILIO_NUMBER, // From a valid Twilio number
  				})
  			.then((messageres) => console.log(msg + '\n\nreciept: ' +  messageres.sid));
}


