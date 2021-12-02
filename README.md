# ol-node-monitor

## Overview

[0L -open libra](https://github.com/OLSF) is a decentralized application platform that is secure enough to manage high value assets like money or identity and performant enough to make them useful for everyday people, putting the power of the Open Web in their hands. It was originally forked from Facebooks libra project and was modified to open and permisionless.



## Requirements

### 0L Node

This assumes that you are running a 0L validator node and a webserver from port 3030. Here are some documents to deploy a validator node.

- [Easy mode](https://github.com/OLSF/libra/blob/main/ol/documentation/node-ops/validators/validator_onboarding_easy_mode.md)
- [Hard mode](https://github.com/OLSF/libra/blob/main/ol/documentation/node-ops/validators/validator_onboarding_hard_mode.md) 

### Twilio

You will need to have a Twilio account with messaging functionality and one phone numbe. Sign up [here](https://www.twilio.com/try-twilio)

### Screen

[Screen](https://www.gnu.org/software/screen/) will have the app run and persist the terminal session. Good tuturial and cheatsheet can be found [here](https://linuxize.com/post/how-to-use-linux-screen/)

Inside the [example](./example.env) folder you can find an example environment file that will need to completed and added in the root directory as .env to use the module. 
Alternatively you can take that tf files as base for customizing your deployment. Please take care specially about the VPC network configuration. 


## Installation



```git clone https://github.com/abellinii/ol-node-monitor.git ```

```cd ol-node-monitor; cp example.env .env```  Populate the ``` .env ``` file with your details.

```yarn install```

- Open up a screen instance

```screen -S session_name```

- Start the app

```node monitor.js```






