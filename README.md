This is a fork of Lisk Cute Assistant.  Modifications have been made to allow compatability with Core 1.0.  The config.js file is set up for testnet, so no need to swap the sample testnet config file in.  In addition, the server.js file has been modified so that the server status call also shows whether Forging is set to true or false.  

## Installation:

Telegram:

Search for @BotFather on Telegram
send /newbot message to @BotFather & follow prompts.
Copy HTTP API token


Install NodeJS:

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

sudo apt-get install -y nodejs

sudo npm install -g n

sudo n 6.14.1

Install Git:

sudo apt-get install git

Install Lisk Cute Assistant:

git clone https://github.com/Nimbus76/lisk-cute-assistant
cd lisk-cute-assistant/
checkout testnet
npm install

npm run generate-password
Scan QR Code with Google Authenticator or Authy to set up 2FA
Copy the generated secret and paste into the variable exports.OTPsecret inside the src/config.js file.
Copy the previously generated telegram API into the variable exports.telegramAPIToken inside the src/config.js file.
npm start
Write to your bot and it will return you the chat id. Copy this chat id into the variable exports.chatId inside the src/config.js file.
In the alternative, you can msg @cid_bot on Telegram to get your chat ID.

npm stop
npm start
/test 2FA-Code to test your 2FA password.  Ex. /test 123456


# Lisk Cute Assistant


![Lisk-Cute-Assistant](https://github.com/xunga/lisk-cute-assistant/blob/master/imgs/lisk-cute-assistant.png?raw=true)

### Lisk Cute Assistant is a bot to manage your Lisk Node remotely from Telegram.

Lisk Cute Assistant enables the node owners to remotely manage it, via telegram. The code is self hosted on the same instance of the lisk node and it configures the telegram bot to only reply to requests only from a given telegram ID.

Since some operations are sensitive, it uses One Time Passwords (OTP) to authenticate the requests.

Lisk-cute-assistant doesn't perform any kind of automatic operation besides checking the health of the node/server. E.g. if your node forks, it will not automatically fix it, but instead it will give you the possibility of rebuilding the node from telegram, after executing the authentication.

## Features

- Block height check, comparing it to other nodes
- Server stats
- Remote rebuild from snapshot server
- Logs tailing & logs grep
- Minute by minute cronjobs to check the node health
- Authentication of requests via OTP (e.g. 2FA passwords from Google Authenticator) for sensitive tasks such as the rebuild

## How to run

[Please follow the](https://github.com/xunga/lisk-cute-assistant/blob/master/INSTALL.md) `INSTALL.md` [file](https://github.com/xunga/lisk-cute-assistant/blob/master/INSTALL.md)

## Functionalities

### Block Heights

It tests your blockheight against the other nodes configured in the `config.js` file

### Server status

Returns the CPU/RAM usage, available space and the lisk process status

### Rebuild from snapshot

It rebuilds the node via the command `bash lisk.sh rebuild -u ${selected_snapshot_server_URL} -f latest.gz`

### Get logs

Opens a new keyboard that enables to: 
- Tail the logs. Yes it opens a stream from your log file with your chat. It batches the logs and sends them every second
- Get recent logs. A single message sent once, with your last logs (tail -n 3000)
- Grep of logs. You can grep the following:
 - Forks cause 1
 - Forks cause 2
 - Forks cause 3
 - Forks cause 4
 - Forks cause 5
 - All forks
 - SIGKILL
 - SIGABRT
 - "Consensus"
 
## Security

The bot is programmed in a way that it only replies to your requests. For certain tasks like the rebuild flow, it requests a [One Time Password](https://en.wikipedia.org/wiki/One-time_password) in order to perform the action.

## Screenshots
<img src="https://github.com/xunga/lisk-cute-assistant/blob/master/imgs/screen0.jpg?raw=true" data-canonical-src="https://github.com/xunga/lisk-cute-assistant/blob/master/imgs/screen0.jpg?raw=true" width="400" />   <img src="https://github.com/xunga/lisk-cute-assistant/blob/master/imgs/screen1.jpg?raw=true" data-canonical-src="https://github.com/xunga/lisk-cute-assistant/blob/master/imgs/screen1.jpg?raw=true" width="400" />


### Todos
- Multi node management (thanks @alepop)
- External heartbeat check
- Improve the snapshot rebuild possibilities (add other snapshot servers)
- When rebuilding we should stop checking the block height, since the the node is not running (d'oh)
- Feature to check new bot version
- More ways to communicate a different block height (Webhooks, email, sms or call)

### Disclaimer

By using this software you accept the terms and conditions. This software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. in no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.

# Built with ❤️ by [Carbonara](lisk://main/voting/vote?votes=carbonara) and [Lisk Elite](http://liskelite.com)
